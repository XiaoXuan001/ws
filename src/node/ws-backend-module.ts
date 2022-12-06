/**
 * Generated using theia-extension-generator
 */
 import { ContainerModule } from '@theia/core/shared/inversify';
 import { WebSocketConnectionProvider } from '@theia/core/lib/browser/messaging/ws-connection-provider';
 import {RedirectingWebSocketConnectionProvider} from './ws-contribution';
 
 
 export default new ContainerModule((bind) => {
     bind(WebSocketConnectionProvider).to(RedirectingWebSocketConnectionProvider).inSingletonScope();
 });
 