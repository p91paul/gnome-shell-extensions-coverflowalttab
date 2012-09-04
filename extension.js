/* -*- mode: js2; js2-basic-offset: 4; indent-tabs-mode: nil -*- */

/* 
 * Gnome-shell extension specific routines.
 *
 * register/unregister keybinding handlers, etc.
 */

const Lang = imports.lang;
const Main = imports.ui.main;
const Meta = imports.gi.Meta;

const CoverflowAltTab = imports.misc.extensionUtils.getCurrentExtension();
const Manager = CoverflowAltTab.imports.manager;

let manager = null;

function init() {
}

function enable() {
	if (!manager) {
		manager = new Manager.Manager();
	}

	Meta.keybindings_set_custom_handler('switch_windows', Lang.bind(manager, manager._startWindowSwitcher));
	Meta.keybindings_set_custom_handler('switch_group', Lang.bind(manager, manager._startWindowSwitcher));
	Meta.keybindings_set_custom_handler('switch_panels', Lang.bind(manager, manager._startWindowSwitcher));
	Meta.keybindings_set_custom_handler('switch_windows_backward', Lang.bind(manager, manager._startWindowSwitcher));
	Meta.keybindings_set_custom_handler('switch_group_backward', Lang.bind(manager, manager._startWindowSwitcher));
}

function disable() {
	if (manager) {
		manager = null;
	}

	Meta.keybindings_set_custom_handler('switch_windows', Lang.bind(Main.wm, Main.wm._startAppSwitcher));
	Meta.keybindings_set_custom_handler('switch_group', Lang.bind(Main.wm, Main.wm._startAppSwitcher));
	Meta.keybindings_set_custom_handler('switch_panels', Lang.bind(Main.wm, Main.wm._startA11ySwitcher));
	Meta.keybindings_set_custom_handler('switch_windows_backward', Lang.bind(Main.wm, Main.wm._startAppSwitcher));
	Meta.keybindings_set_custom_handler('switch_group_backward', Lang.bind(Main.wm, Main.wm._startAppSwitcher));
}
