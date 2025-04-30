import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig & { bundledWebRuntime?: boolean } = {
  appId: 'io.ionic.starter',
  appName: 'ecochain-mobile',
  webDir: 'www',
  bundledWebRuntime: false
};
