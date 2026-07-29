// WaterShape.ts
type WaterProps = {
  x: number;
  y: number;
  width: number;
  height: number;
};
import gsap from 'gsap';
export class WaterShape {
  private originY: number;
  private originHeight: number;
  private rect: SVGRectElement;
  private animTl: gsap.core.Tween | null = null;

  private _data: WaterProps;
  private waterlevel: number = 0;
  private updateWater: boolean = false;

  private readonly DURATION = 300;

  constructor(svgRoot: SVGSVGElement, rectId = 'water') {
    if (svgRoot) this.init(svgRoot, rectId);
  }

  public init(svgRoot: SVGSVGElement, rectId: string) {
    const rect = svgRoot.getElementById(rectId) as SVGRectElement;
    if (!rect) throw new Error(`找不到 #${rectId}`);
    this.rect = rect;

    const getNum = (s: string | null) => {
      const n = Number(s);
      return Number.isNaN(n) ? 0 : n;
    };

    this._data = {
      x: getNum(rect.getAttribute('x')),
      y: getNum(rect.getAttribute('y')),
      width: getNum(rect.getAttribute('width')),
      height: getNum(rect.getAttribute('height'))
    };

    this.originY = this._data.y;
    this.originHeight = this._data.height;
  }

  public get x() {
    return this._data.x;
  }
  public set x(v: number) {
    this._data.x = v;
    this.rect.setAttribute('x', String(v));
  }

  public get y() {
    return this._data.y;
  }
  public set y(v: number) {
    this._data.y = v;
    this.rect.setAttribute('y', String(v));
  }

  public get width() {
    return this._data.width;
  }
  public set width(v: number) {
    this._data.width = v;
    this.rect.setAttribute('width', String(v));
  }

  public get height() {
    return this._data.height;
  }
  public set height(v: number) {
    this._data.height = v;
    this.rect.setAttribute('height', String(v));
  }

  // public setLevel(val: number) {
  //   !this.updateWater && (this.updateWater = true);
  //   if (this.waterlevel == val) return;
  //   const tmp = typeof val === 'number' && !Number.isNaN(val) ? val : 0;
  //   const num = Math.max(0, Math.min(1, tmp));
  //   this.height = this.originHeight * num;
  //   this.y = this.originY + (this.originHeight - this.height);
  //   this.waterlevel = val;
  // }
  public setLevel(val: number) {
    !this.updateWater && (this.updateWater = true);
    // 原值校验、边界截断逻辑完全保留
    const tmp = typeof val === 'number' && !Number.isNaN(val) ? val : 0;
    const targetNum = Math.max(0, Math.min(1, tmp));
    const targetH = this.originHeight * targetNum;
    const targetY = this.originY + (this.originHeight - targetH);

    // 目标数值完全一致，直接退出
    if (this.waterlevel === val && this.height === targetH) return;

    // 中断上一轮未完成动画，防止动画叠加错乱
    if (this.animTl) {
      this.animTl.kill();
    }

    // 更新基准水位标识
    this.waterlevel = val;

    // GSAP 同时插值 height / y
    this.animTl = gsap.to(this, {
      height: targetH,
      y: targetY,
      duration: this.DURATION / 1000, // gsap 单位是秒
      ease: 'linear', // 水位匀速过渡最合适
      onUpdate: (target) => {
        // 动画每一帧实时同步实例字段，外部读取实时最新值
        this.height = target.height;
        this.y = target.y;
      },
      onComplete: () => {
        this.animTl = null;
      }
    });
  }
}

//实例注册 hooks

import { onUnmounted, getCurrentInstance } from 'vue';

const componentMap = new Map<string, object>();

export function registerCompInstance(compId: string) {
  const instance = getCurrentInstance();
  if (!instance) return;
  componentMap.set(compId, instance);

  onUnmounted(() => {
    componentMap.delete(compId);
  });
}
export function getComInstance(compId: string) {
  return componentMap.get(compId);
}
