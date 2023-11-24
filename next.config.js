/** @type {import('next').NextConfig} */

const env = process.env.NODE_ENV

let nextConfig = {}

if(env=="dev"){
    nextConfig = {
        output: 'export',
    }
}

module.exports = nextConfig
