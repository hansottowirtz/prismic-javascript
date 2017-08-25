import Predicates from './predicates';
import { DefaultRequestHandler } from './request';
import { Experiments } from './experiments';

import {
  ApiOptions,
  Api,
} from "./api";

import { EXPERIMENT_COOKIE, PREVIEW_COOKIE } from './ResolvedApi';

// function getApi(url: string, options: ApiOptions | null): Promise<Api> {
//   const safeOptions = options || {} as ApiOptions;
//   var api = new Api(url, safeOptions);
//   //Use cached api data if available
//   return new Promise(function(resolve, reject) {
//     var cb = function(err: Error | null, api?: any) {
//       if (safeOptions.complete) safeOptions.complete(err, api);
//       if (err) {
//         reject(err);
//       } else {
//         resolve(api);
//       }
//     };
//     api.get(function (err: Error, data: any) {
//       if (!err && data) {
//         api.data = data;
//         api.bookmarks = data.bookmarks;
//         api.experiments = new Experiments(data.experiments);
//       }

//       cb(err, api);
//     });

//     return api;
//   });
// }

module.exports = {
  experimentCookie: EXPERIMENT_COOKIE,
  previewCookie: PREVIEW_COOKIE,
  Predicates,
  Experiments,
//  api: getApi,
  Api,
//  getApi
};
