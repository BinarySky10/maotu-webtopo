import type { Plugin } from 'vite';
export function publicFileListWatcher(): Plugin {
  const targetDir = path.resolve('../public/data');
  const outputJson = path.resolve('../public/data/fileList/fileList.json');

  // 生成清单函数
  function refreshList() {
    const files = fsSync
      .readdirSync(targetDir, { withFileTypes: true })
      .filter((e) => e.isFile())
      .map((e) => e.name);
    fsSync.writeFileSync(outputJson, JSON.stringify(files));
  }

  return {
    name: 'public-file-list',
    // 服务启动首次生成
    configureServer() {
      refreshList();
      // 监听public目录文件变化，自动刷新清单
      fs.watch(targetDir, () => refreshList());
    },
    // build打包前生成一次
    configResolved() {
      refreshList();
    }
  };
}
