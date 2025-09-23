import { Config as StylelintConfig } from "stylelint";

export type Plugins = StylelintConfig["plugins"];
export type Rules = StylelintConfig["rules"];
export type Override = Omit<StylelintConfig, "overrides"> & {
	files: string | string[];
	name?: string;
};
export type Overrides = StylelintConfig["overrides"];
export type Config = StylelintConfig;
