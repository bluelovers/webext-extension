/**
 * Created by user on 2017/8/23/023.
 */
export interface IExtension {
    alarms?: any;
    bookmarks?: any;
    browserAction?: any;
    commands?: any;
    contextMenus?: any;
    cookies?: any;
    downloads?: any;
    events?: any;
    extension?: any;
    extensionTypes?: any;
    history?: any;
    i18n?: any;
    idle?: any;
    notifications?: any;
    pageAction?: any;
    runtime?: any;
    storage?: any;
    tabs?: any;
    webNavigation?: any;
    webRequest?: any;
    windows?: any;
}
export declare const apis: string[];
export declare function Extension(browser?: IExtension, ...argv: IExtension[]): IExtension;
export declare const extension: IExtension;
export default extension;
