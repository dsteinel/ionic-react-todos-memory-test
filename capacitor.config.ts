import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'ionic-react-todos',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
