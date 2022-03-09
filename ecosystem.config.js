let port = 5500
let project = controller_build
let repository = ''

module.exports = {
    apps: [{
        name: `${port} - ${project}`,
        script: `/var/node/${project}/source/app.js`,
        node_args: '--no-warnings',
        kill_timeout: 3000,
        instances: 1,
        output: `/var/node_logs/${project}-out.log`,
        error: `/var/node_logs/${project}-error.log`,
        merge_logs: true,
        log_date_format: "DD-MM-YYYY HH:mm:ss:SSS",
        env: {
            NODE_ENV: "production"
        }
    }],
    deploy: {
         production: {
         "host": "hansolo.sodimac.cl",
         "user": "desarrollo",
         "ref": "origin/master",
         "repo": repository,
         "path": `/var/node/${project}`,
         "post-deploy": "npm install; pm2 startOrRestart ecosystem.config.js"
         },
        develop: {
            "host": "thanos.dda.sodimac.cl",
            "user": "desarrollo",
            "ref": "origin/develop",
            "repo": repository,
            "path": `/var/node/${project}`,
            "post-deploy": "npm install; pm2 startOrRestart ecosystem.config.js",
        }
    }
}
