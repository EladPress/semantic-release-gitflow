// import {version} from './package.json' assert { type: "json" };
import getProjectVersion from 'get-project-version';
/**
 * Determine the type of release to create based on a list of commits.
 *
 * @param {Object} pluginConfig The plugin configuration.
 * @param {String} pluginConfig.preset conventional-changelog preset ('angular', 'atom', 'codemirror', 'ember', 'eslint', 'express', 'jquery', 'jscs', 'jshint')
 * @param {String} pluginConfig.config Requireable npm package with a custom conventional-changelog preset
 * @param {String|Array} pluginConfig.releaseRules A `String` to load an external module or an `Array` of rules.
 * @param {Object} pluginConfig.parserOpts Additional `conventional-changelog-parser` options that will overwrite ones loaded by `preset` or `config`.
 * @param {Object} context The semantic-release context.
 * @param {Array<Object>} context.commits The commits to analyze.
 * @param {String} context.cwd The current working directory.
 *
 * @returns {Promise<String|null>} the type of release to create based on the list of commits or `null` if no release has to be done.
 */

export async function analyzeCommits(pluginConfig, context) {
    const { commits, logger } = context;
    const version = getProjectVersion();
 
    logger.log('semantic-release-gitflow, ' + version);
    logger.log(commits)

    // logger.log('semantic-release-gitflow@' + version);
    logger.log("pluginConfig: " + JSON.stringify(pluginConfig));
    logger.log("release rules: " + JSON.stringify(pluginConfig.releaseRules));
}