import federation from '@originjs/vite-plugin-federation'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    vite: {
        server: {
        },
        cacheDir: 'node_modules/.cacheDir',
        plugins: [
            federation({
                name: 'layout',
                filename: 'remoteEntry.js',
                remotes: {
                    remoteA: {
                        external: `Promise.resolve('http://localhost:5001/assets/remoteEntry.js')`,
                        externalType: "promise"
                    },
                    remoteB: {
                        external: `Promise.resolve('http://localhost:5002/assets/remoteEntry.js')`,
                        externalType: "promise"
                    },
                },
                shared: {
                    vue:{
                        // This is an invalid configuration, because the generate attribute is not supported on the host side
                        generate:false
                    }
                    // pinia:{
                    // },
                    // myStore: {
                    //     packagePath: './src/store.js'
                    // }
                }
            })
        ],
        build: {
            target: 'esnext',
            minify: false,
            cssCodeSplit: true,
            rollupOptions: {
                output: {
                    minifyInternalExports: false
                }
            }
        }
    }
})
