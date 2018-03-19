export default function (config, env, helpers) {
  if (env.production) {
    config.output.publicPath = 'https://jknanda78.github.io/build-your-own-component';
  }
}