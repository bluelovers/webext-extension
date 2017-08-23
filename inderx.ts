/**
 * Created by user on 2017/8/23/023.
 */

export interface IExtension
{
	alarms?;
	bookmarks?;
	browserAction?;
	commands?;
	contextMenus?;
	cookies?;
	downloads?;
	events?;
	extension?;
	extensionTypes?;
	history?;
	i18n?;
	idle?;
	notifications?;
	pageAction?;
	runtime?;
	storage?;
	tabs?;
	webNavigation?;
	webRequest?;
	windows?;
}

export const apis: string[] = [
	'alarms',
	'bookmarks',
	'browserAction',
	'commands',
	'contextMenus',
	'cookies',
	'downloads',
	'events',
	'extension',
	'extensionTypes',
	'history',
	'i18n',
	'idle',
	'notifications',
	'pageAction',
	'runtime',
	'storage',
	'tabs',
	'webNavigation',
	'webRequest',
	'windows',
];

export function Extension(browser: IExtension = browser, ...argv: IExtension[]): IExtension
{
	const _this = {} as IExtension;

	apis.forEach(function (api)
	{
		_this[api] = null;
	});

	const extension = Object.assign(_this, browser, ...argv);

	return extension;
}

export const extension = Extension(chrome as IExtension, browser as IExtension);

export default extension;
