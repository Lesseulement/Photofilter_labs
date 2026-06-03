export default {
    // Говорим сборщику делать все пути относительными, чтобы они работали на бэкенде
    base: './', 
    publicDir: false, 
    build: {
        outDir: './public',
        emptyOutDir: true,
        chunkSizeWarningLimit: 1500, 
    },
};