import { injectable} from 'inversify';
import { WebSocketConnectionProvider } from "@theia/core/lib/browser/messaging/ws-connection-provider";
import { Endpoint } from "@theia/core/lib/browser/endpoint";
@injectable()
export class RedirectingWebSocketConnectionProvider extends WebSocketConnectionProvider {
  override createWebSocketUrl(path: string): string {
    // Since we are using Socket.io, the path should look like the following:
    // proto://domain.com/{path}
    console.log("read me");
    return new Endpoint().getWebSocketUrl().withPath(path).toString();
  }
}
