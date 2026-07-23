import fsSync from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const currentFilePath = fileURLToPath(import.meta.url);
const mockFolderDir = path.dirname(currentFilePath);
const rootDir = path.join(mockFolderDir, '../');

export default [
    {
        url: '/api/savePublicJson',
        method: 'post',
        response: ({ body }) => {
            try {
                const { subDir, fileName, data } = body;
                const targetDir = path.resolve(rootDir, `public/${subDir}`);
                const fullPath = path.join(targetDir, fileName);
                // 同步创建目录，执行完才往下走
                // 1. 先确保目录存在
                fsSync.mkdirSync(targetDir, { recursive: true });

                fsSync.mkdirSync(targetDir, { recursive: true });
                console.log('fullPath', fullPath);
                console.log('data', data);
                fsSync.writeFileSync(fullPath, JSON.stringify(data, null, 2), 'utf8');
                return { code: 0, msg: '保存成功' };
            } catch (err) {
                console.error('错误详情', err);
                return { code: -1, msg: err.message };
            }
        }
    }
];
