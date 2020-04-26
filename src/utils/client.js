/* eslint-disable */

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
/**
 * Netlify's API documentation
 * 0.13.3
 * DO NOT MODIFY - This file has been generated using oazapfts.
 * See https://www.npmjs.com/package/oazapfts
 */
exports.defaults = {
    baseUrl: "https://api.netlify.com/api/v1"
};
exports.servers = {
    server1: "https://api.netlify.com/api/v1"
};
exports._ = {
    fetch: function (url, req) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, baseUrl, headers, customFetch, init, href, res;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = __assign(__assign({}, exports.defaults), req), baseUrl = _a.baseUrl, headers = _a.headers, customFetch = _a.fetch, init = __rest(_a, ["baseUrl", "headers", "fetch"]);
                        href = exports._.joinUrl(baseUrl, url);
                        return [4 /*yield*/, (customFetch || fetch)(href, __assign(__assign({}, init), { headers: exports._.stripUndefined(__assign(__assign({}, exports.defaults.headers), headers)) }))];
                    case 1:
                        res = _b.sent();
                        if (!res.ok) {
                            throw new HttpError(res.status, res.statusText, href);
                        }
                        return [2 /*return*/, res.text()];
                }
            });
        });
    },
    fetchJson: function (url, req) {
        if (req === void 0) { req = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, exports._.fetch(url, __assign(__assign({}, req), { headers: __assign(__assign({}, req.headers), { Accept: "application/json" }) }))];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res && JSON.parse(res)];
                }
            });
        });
    },
    json: function (_a) {
        var body = _a.body, headers = _a.headers, req = __rest(_a, ["body", "headers"]);
        return __assign(__assign({}, req), { body: JSON.stringify(body), headers: __assign(__assign({}, headers), { "Content-Type": "application/json" }) });
    },
    form: function (_a) {
        var body = _a.body, headers = _a.headers, req = __rest(_a, ["body", "headers"]);
        return __assign(__assign({}, req), { body: exports.QS.form(body), headers: __assign(__assign({}, headers), { "Content-Type": "application/x-www-form-urlencoded" }) });
    },
    multipart: function (_a) {
        var body = _a.body, req = __rest(_a, ["body"]);
        var data = new FormData();
        Object.entries(body).forEach(function (_a) {
            var name = _a[0], value = _a[1];
            data.append(name, value);
        });
        return __assign(__assign({}, req), { body: data });
    },
    /**
     * Deeply remove all properties with undefined values.
     */
    stripUndefined: function (obj) {
        return obj && JSON.parse(JSON.stringify(obj));
    },
    // Encode param names and values as URIComponent
    encodeReserved: [encodeURIComponent, encodeURIComponent],
    allowReserved: [encodeURIComponent, encodeURI],
    /**
     * Creates a tag-function to encode template strings with the given encoders.
     */
    encode: function (encoders, delimiter) {
        if (delimiter === void 0) { delimiter = ","; }
        var q = function (v, i) {
            var encoder = encoders[i % encoders.length];
            if (typeof v === "object") {
                if (Array.isArray(v)) {
                    return v.map(encoder).join(delimiter);
                }
                var flat = Object.entries(v).reduce(function (flat, entry) { return __spreadArrays(flat, entry); }, []);
                return flat.map(encoder).join(delimiter);
            }
            return encoder(String(v));
        };
        return function (strings) {
            var values = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                values[_i - 1] = arguments[_i];
            }
            return strings.reduce(function (prev, s, i) {
                return "" + prev + s + q(values[i] || "", i);
            }, "");
        };
    },
    /**
     * Separate array values by the given delimiter.
     */
    delimited: function (delimiter) {
        if (delimiter === void 0) { delimiter = ","; }
        return function (params, encoders) {
            if (encoders === void 0) { encoders = exports._.encodeReserved; }
            return Object.entries(params)
                .filter(function (_a) {
                var value = _a[1];
                return value !== undefined;
            })
                .map(function (_a) {
                var name = _a[0], value = _a[1];
                return exports._.encode(encoders, delimiter)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["", "=", ""], ["", "=", ""])), name, value);
            })
                .join("&");
        };
    },
    joinUrl: function () {
        var parts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            parts[_i] = arguments[_i];
        }
        return parts
            .filter(Boolean)
            .join("/")
            .replace(/([^:]\/)\/+/, "$1");
    }
};
/**
 * Functions to serialize query parameters in different styles.
 */
exports.QS = {
    /**
     * Join params using an ampersand and prepends a questionmark if not empty.
     */
    query: function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        var s = params.join("&");
        return s && "?" + s;
    },
    /**
     * Serializes nested objects according to the `deepObject` style specified in
     * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md#style-values
     */
    deep: function (params, _a) {
        var _b = _a === void 0 ? exports._.encodeReserved : _a, k = _b[0], v = _b[1];
        var qk = exports._.encode([function (s) { return s; }, k]);
        var qv = exports._.encode([function (s) { return s; }, v]);
        // don't add index to arrays
        // https://github.com/expressjs/body-parser/issues/289
        var visit = function (obj, prefix) {
            if (prefix === void 0) { prefix = ""; }
            return Object.entries(obj)
                .filter(function (_a) {
                var v = _a[1];
                return v !== undefined;
            })
                .map(function (_a) {
                var prop = _a[0], v = _a[1];
                var index = Array.isArray(obj) ? "" : prop;
                var key = prefix ? qk(templateObject_2 || (templateObject_2 = __makeTemplateObject(["", "[", "]"], ["", "[", "]"])), prefix, index) : prop;
                if (typeof v === "object") {
                    return visit(v, key);
                }
                return qv(templateObject_3 || (templateObject_3 = __makeTemplateObject(["", "=", ""], ["", "=", ""])), key, v);
            })
                .join("&");
        };
        return visit(params);
    },
    /**
     * Property values of type array or object generate separate parameters
     * for each value of the array, or key-value-pair of the map.
     * For other types of properties this property has no effect.
     * See https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md#encoding-object
     */
    explode: function (params, encoders) {
        if (encoders === void 0) { encoders = exports._.encodeReserved; }
        var q = exports._.encode(encoders);
        return Object.entries(params)
            .filter(function (_a) {
            var value = _a[1];
            return value !== undefined;
        })
            .map(function (_a) {
            var name = _a[0], value = _a[1];
            if (Array.isArray(value)) {
                return value.map(function (v) { return q(templateObject_4 || (templateObject_4 = __makeTemplateObject(["", "=", ""], ["", "=", ""])), name, v); }).join("&");
            }
            if (typeof value === "object") {
                return exports.QS.explode(value, encoders);
            }
            return q(templateObject_5 || (templateObject_5 = __makeTemplateObject(["", "=", ""], ["", "=", ""])), name, value);
        })
            .join("&");
    },
    form: exports._.delimited(),
    pipe: exports._.delimited("|"),
    space: exports._.delimited("%20")
};
var HttpError = /** @class */ (function (_super) {
    __extends(HttpError, _super);
    function HttpError(status, message, url) {
        var _this = _super.call(this, url + " - " + message + " (" + status + ")") || this;
        _this.status = status;
        return _this;
    }
    return HttpError;
}(Error));
exports.HttpError = HttpError;
function listSites(_a, opts) {
    var _b = _a === void 0 ? {} : _a, name = _b.name, filter = _b.filter;
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, exports._.fetchJson("/sites" + exports.QS.query(exports.QS.form({
                        name: name,
                        filter: filter
                    })), __assign({}, opts))];
                case 1: return [2 /*return*/, _c.sent()];
            }
        });
    });
}
exports.listSites = listSites;
function createSite(body, _a, opts) {
    var configureDns = (_a === void 0 ? {} : _a).configureDns;
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, exports._.fetchJson("/sites" + exports.QS.query(exports.QS.form({
                        configure_dns: configureDns
                    })), exports._.json(__assign(__assign({}, opts), { method: "POST", body: body })))];
                case 1: return [2 /*return*/, _b.sent()];
            }
        });
    });
}
exports.createSite = createSite;
function getSite(siteId, opts) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports._.fetchJson("/sites/" + siteId, __assign({}, opts))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.getSite = getSite;
function updateSite(siteId, body, opts) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports._.fetchJson("/sites/" + siteId, exports._.json(__assign(__assign({}, opts), { method: "PATCH", body: body })))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.updateSite = updateSite;
function deleteSite(siteId, opts) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports._.fetch("/sites/" + siteId, __assign(__assign({}, opts), { method: "DELETE" }))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.deleteSite = deleteSite;
function provisionSiteTlsCertificate(siteId, _a, opts) {
    var _b = _a === void 0 ? {} : _a, certificate = _b.certificate, key = _b.key, caCertificates = _b.caCertificates;
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, exports._.fetchJson("/sites/" + siteId + "/ssl" + exports.QS.query(exports.QS.form({
                        certificate: certificate,
                        key: key,
                        ca_certificates: caCertificates
                    })), __assign(__assign({}, opts), { method: "POST" }))];
                case 1: return [2 /*return*/, _c.sent()];
            }
        });
    });
}
exports.provisionSiteTlsCertificate = provisionSiteTlsCertificate;
function showSiteTlsCertificate(siteId, opts) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports._.fetchJson("/sites/" + siteId + "/ssl", __assign({}, opts))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.showSiteTlsCertificate = showSiteTlsCertificate;
function listSiteForms(siteId, opts) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports._.fetchJson("/sites/" + siteId + "/forms", __assign({}, opts))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.listSiteForms = listSiteForms;
function listSiteSubmissions(siteId, opts) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports._.fetchJson("/sites/" + siteId + "/submissions", __assign({}, opts))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.listSiteSubmissions = listSiteSubmissions;
function listSiteFiles(siteId, opts) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports._.fetchJson("/sites/" + siteId + "/files", __assign({}, opts))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.listSiteFiles = listSiteFiles;
function listSiteAssets(siteId, opts) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports._.fetchJson("/sites/" + siteId + "/assets", __assign({}, opts))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.listSiteAssets = listSiteAssets;
function createSiteAsset(siteId, name, size, contentType, _a, opts) {
    var visibility = (_a === void 0 ? {} : _a).visibility;
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, exports._.fetchJson("/sites/" + siteId + "/assets" + exports.QS.query(exports.QS.form({
                        name: name,
                        size: size,
                        content_type: contentType,
                        visibility: visibility
                    })), __assign(__assign({}, opts), { method: "POST" }))];
                case 1: return [2 /*return*/, _b.sent()];
            }
        });
    });
}
exports.createSiteAsset = createSiteAsset;
function getSiteAssetInfo(siteId, assetId, opts) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports._.fetchJson("/sites/" + siteId + "/assets/" + assetId, __assign({}, opts))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.getSiteAssetInfo = getSiteAssetInfo;
function updateSiteAsset(siteId, assetId, state, opts) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports._.fetchJson("/sites/" + siteId + "/assets/" + assetId + exports.QS.query(exports.QS.form({
                        state: state
                    })), __assign(__assign({}, opts), { method: "PUT" }))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.updateSiteAsset = updateSiteAsset;
function deleteSiteAsset(siteId, assetId, opts) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports._.fetch("/sites/" + siteId + "/assets/" + assetId, __assign(__assign({}, opts), { method: "DELETE" }))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.deleteSiteAsset = deleteSiteAsset;
function getSiteAssetPublicSignature(siteId, assetId, opts) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports._.fetchJson("/sites/" + siteId + "/assets/" + assetId + "/public_signature", __assign({}, opts))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.getSiteAssetPublicSignature = getSiteAssetPublicSignature;
function getSiteFileByPathName(siteId, filePath, opts) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports._.fetchJson("/sites/" + siteId + "/files/" + filePath, __assign({}, opts))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.getSiteFileByPathName = getSiteFileByPathName;
function listSiteSnippets(siteId, opts) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports._.fetchJson("/sites/" + siteId + "/snippets", __assign({}, opts))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.listSiteSnippets = listSiteSnippets;
function createSiteSnippet(siteId, body, opts) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports._.fetchJson("/sites/" + siteId + "/snippets", exports._.json(__assign(__assign({}, opts), { method: "POST", body: body })))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.createSiteSnippet = createSiteSnippet;
function getSiteSnippet(siteId, snippetId, opts) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports._.fetchJson("/sites/" + siteId + "/snippets/" + snippetId, __assign({}, opts))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.getSiteSnippet = getSiteSnippet;
function updateSiteSnippet(siteId, snippetId, body, opts) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports._.fetch("/sites/" + siteId + "/snippets/" + snippetId, exports._.json(__assign(__assign({}, opts), { method: "PUT", body: body })))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.updateSiteSnippet = updateSiteSnippet;
function deleteSiteSnippet(siteId, snippetId, opts) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports._.fetch("/sites/" + siteId + "/snippets/" + snippetId, __assign(__assign({}, opts), { method: "DELETE" }))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.deleteSiteSnippet = deleteSiteSnippet;
function getSiteMetadata(siteId, opts) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports._.fetchJson("/sites/" + siteId + "/metadata", __assign({}, opts))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.getSiteMetadata = getSiteMetadata;
function updateSiteMetadata(siteId, body, opts) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports._.fetch("/sites/" + siteId + "/metadata", exports._.json(__assign(__assign({}, opts), { method: "PUT", body: body })))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.updateSiteMetadata = updateSiteMetadata;
function listSiteBuildHooks(siteId, opts) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports._.fetchJson("/sites/" + siteId + "/build_hooks", __assign({}, opts))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.listSiteBuildHooks = listSiteBuildHooks;
function createSiteBuildHook(siteId, body, opts) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports._.fetchJson("/sites/" + siteId + "/build_hooks", exports._.json(__assign(__assign({}, opts), { method: "POST", body: body })))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.createSiteBuildHook = createSiteBuildHook;
function getSiteBuildHook(siteId, id, opts) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports._.fetchJson("/sites/" + siteId + "/build_hooks/" + id, __assign({}, opts))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.getSiteBuildHook = getSiteBuildHook;
function updateSiteBuildHook(siteId, id, body, opts) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports._.fetch("/sites/" + siteId + "/build_hooks/" + id, exports._.json(__assign(__assign({}, opts), { method: "PUT", body: body })))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.updateSiteBuildHook = updateSiteBuildHook;
function deleteSiteBuildHook(siteId, id, opts) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports._.fetch("/sites/" + siteId + "/build_hooks/" + id, __assign(__assign({}, opts), { method: "DELETE" }))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.deleteSiteBuildHook = deleteSiteBuildHook;
function listSiteDeploys(siteId, opts) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports._.fetchJson("/sites/" + siteId + "/deploys", __assign({}, opts))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.listSiteDeploys = listSiteDeploys;
function createSiteDeploy(siteId, body, _a, opts) {
    var title = (_a === void 0 ? {} : _a).title;
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, exports._.fetchJson("/sites/" + siteId + "/deploys" + exports.QS.query(exports.QS.form({
                        title: title
                    })), exports._.json(__assign(__assign({}, opts), { method: "POST", body: body })))];
                case 1: return [2 /*return*/, _b.sent()];
            }
        });
    });
}
exports.createSiteDeploy = createSiteDeploy;
function getSiteDeploy(siteId, deployId, opts) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports._.fetchJson("/sites/" + siteId + "/deploys/" + deployId, __assign({}, opts))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.getSiteDeploy = getSiteDeploy;
function updateSiteDeploy(siteId, deployId, body, opts) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports._.fetchJson("/sites/" + siteId + "/deploys/" + deployId, exports._.json(__assign(__assign({}, opts), { method: "PUT", body: body })))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.updateSiteDeploy = updateSiteDeploy;
function cancelSiteDeploy(deployId, opts) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports._.fetchJson("/deploys/" + deployId + "/cancel", __assign(__assign({}, opts), { method: "POST" }))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.cancelSiteDeploy = cancelSiteDeploy;
function restoreSiteDeploy(siteId, deployId, opts) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports._.fetchJson("/sites/" + siteId + "/deploys/" + deployId + "/restore", __assign(__assign({}, opts), { method: "POST" }))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.restoreSiteDeploy = restoreSiteDeploy;
function listSiteBuilds(siteId, opts) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports._.fetchJson("/sites/" + siteId + "/builds", __assign({}, opts))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.listSiteBuilds = listSiteBuilds;
function createSiteBuild(siteId, opts) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports._.fetchJson("/sites/" + siteId + "/builds", __assign(__assign({}, opts), { method: "POST" }))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.createSiteBuild = createSiteBuild;
function listSiteDeployedBranches(siteId, opts) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports._.fetchJson("/sites/" + siteId + "/deployed-branches", __assign({}, opts))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.listSiteDeployedBranches = listSiteDeployedBranches;
function getSiteBuild(buildId, opts) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports._.fetchJson("/builds/" + buildId, __assign({}, opts))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.getSiteBuild = getSiteBuild;
function updateSiteBuildLog(buildId, opts) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports._.fetch("/builds/" + buildId + "/log", __assign(__assign({}, opts), { method: "POST" }))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.updateSiteBuildLog = updateSiteBuildLog;
function notifyBuildStart(buildId, opts) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports._.fetch("/builds/" + buildId + "/start", __assign(__assign({}, opts), { method: "POST" }))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.notifyBuildStart = notifyBuildStart;
function getDnsForSite(siteId, opts) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports._.fetchJson("/sites/" + siteId + "/dns", __assign({}, opts))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.getDnsForSite = getDnsForSite;
function configureDnsForSite(siteId, opts) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports._.fetchJson("/sites/" + siteId + "/dns", __assign(__assign({}, opts), { method: "PUT" }))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.configureDnsForSite = configureDnsForSite;
function getDeploy(deployId, opts) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports._.fetchJson("/deploys/" + deployId, __assign({}, opts))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.getDeploy = getDeploy;
function lockDeploy(deployId, opts) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports._.fetchJson("/deploys/" + deployId + "/lock", __assign(__assign({}, opts), { method: "POST" }))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.lockDeploy = lockDeploy;
function unlockDeploy(deployId, opts) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports._.fetchJson("/deploys/" + deployId + "/unlock", __assign(__assign({}, opts), { method: "POST" }))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.unlockDeploy = unlockDeploy;
function uploadDeployFile(deployId, path, body, _a, opts) {
    var size = (_a === void 0 ? {} : _a).size;
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, exports._.fetchJson("/deploys/" + deployId + "/files/" + path + exports.QS.query(exports.QS.form({
                        size: size
                    })), __assign(__assign({}, opts), { method: "PUT", body: body }))];
                case 1: return [2 /*return*/, _b.sent()];
            }
        });
    });
}
exports.uploadDeployFile = uploadDeployFile;
function uploadDeployFunction(deployId, name, body, _a, opts) {
    var _b = _a === void 0 ? {} : _a, runtime = _b.runtime, size = _b.size;
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, exports._.fetchJson("/deploys/" + deployId + "/functions/" + name + exports.QS.query(exports.QS.form({
                        runtime: runtime,
                        size: size
                    })), __assign(__assign({}, opts), { method: "PUT", body: body }))];
                case 1: return [2 /*return*/, _c.sent()];
            }
        });
    });
}
exports.uploadDeployFunction = uploadDeployFunction;
function listForms(_a, opts) {
    var siteId = (_a === void 0 ? {} : _a).siteId;
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, exports._.fetchJson("/forms" + exports.QS.query(exports.QS.form({
                        site_id: siteId
                    })), __assign({}, opts))];
                case 1: return [2 /*return*/, _b.sent()];
            }
        });
    });
}
exports.listForms = listForms;
function listFormSubmissions(formId, opts) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports._.fetchJson("/forms/" + formId + "/submissions", __assign({}, opts))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.listFormSubmissions = listFormSubmissions;
function listHooksBySiteId(siteId, opts) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports._.fetchJson("/hooks" + exports.QS.query(exports.QS.form({
                        site_id: siteId
                    })), __assign({}, opts))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.listHooksBySiteId = listHooksBySiteId;
function createHookBySiteId(siteId, body, opts) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports._.fetchJson("/hooks" + exports.QS.query(exports.QS.form({
                        site_id: siteId
                    })), exports._.json(__assign(__assign({}, opts), { method: "POST", body: body })))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.createHookBySiteId = createHookBySiteId;
function getHook(hookId, opts) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports._.fetchJson("/hooks/" + hookId, __assign({}, opts))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.getHook = getHook;
function updateHook(hookId, body, opts) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports._.fetchJson("/hooks/" + hookId, exports._.json(__assign(__assign({}, opts), { method: "PUT", body: body })))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.updateHook = updateHook;
function deleteHook(hookId, opts) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports._.fetch("/hooks/" + hookId, __assign(__assign({}, opts), { method: "DELETE" }))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.deleteHook = deleteHook;
function enableHook(hookId, opts) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports._.fetchJson("/hooks/" + hookId + "/enable", __assign(__assign({}, opts), { method: "POST" }))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.enableHook = enableHook;
function listHookTypes(opts) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports._.fetchJson("/hooks/types", __assign({}, opts))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.listHookTypes = listHookTypes;
function createTicket(clientId, opts) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports._.fetchJson("/oauth/tickets" + exports.QS.query(exports.QS.form({
                        client_id: clientId
                    })), __assign(__assign({}, opts), { method: "POST" }))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.createTicket = createTicket;
function showTicket(ticketId, opts) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports._.fetchJson("/oauth/tickets/" + ticketId, __assign({}, opts))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.showTicket = showTicket;
function exchangeTicket(ticketId, opts) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports._.fetchJson("/oauth/tickets/" + ticketId + "/exchange", __assign(__assign({}, opts), { method: "POST" }))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.exchangeTicket = exchangeTicket;
function listDeployKeys(opts) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports._.fetchJson("/deploy_keys", __assign({}, opts))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.listDeployKeys = listDeployKeys;
function createDeployKey(opts) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports._.fetchJson("/deploy_keys", __assign(__assign({}, opts), { method: "POST" }))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.createDeployKey = createDeployKey;
function getDeployKey(keyId, opts) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports._.fetchJson("/deploy_keys/" + keyId, __assign({}, opts))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.getDeployKey = getDeployKey;
function deleteDeployKey(keyId, opts) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports._.fetch("/deploy_keys/" + keyId, __assign(__assign({}, opts), { method: "DELETE" }))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.deleteDeployKey = deleteDeployKey;
function createSiteInTeam(accountSlug, body, _a, opts) {
    var configureDns = (_a === void 0 ? {} : _a).configureDns;
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, exports._.fetchJson("/" + accountSlug + "/sites" + exports.QS.query(exports.QS.form({
                        configure_dns: configureDns
                    })), exports._.json(__assign(__assign({}, opts), { method: "POST", body: body })))];
                case 1: return [2 /*return*/, _b.sent()];
            }
        });
    });
}
exports.createSiteInTeam = createSiteInTeam;
function listSitesForAccount(accountSlug, _a, opts) {
    var name = (_a === void 0 ? {} : _a).name;
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, exports._.fetchJson("/" + accountSlug + "/sites" + exports.QS.query(exports.QS.form({
                        name: name
                    })), __assign({}, opts))];
                case 1: return [2 /*return*/, _b.sent()];
            }
        });
    });
}
exports.listSitesForAccount = listSitesForAccount;
function listMembersForAccount(accountSlug, opts) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports._.fetchJson("/" + accountSlug + "/members", __assign({}, opts))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.listMembersForAccount = listMembersForAccount;
function addMemberToAccount(accountSlug, email, _a, opts) {
    var role = (_a === void 0 ? {} : _a).role;
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, exports._.fetchJson("/" + accountSlug + "/members" + exports.QS.query(exports.QS.form({
                        role: role,
                        email: email
                    })), __assign(__assign({}, opts), { method: "POST" }))];
                case 1: return [2 /*return*/, _b.sent()];
            }
        });
    });
}
exports.addMemberToAccount = addMemberToAccount;
function listPaymentMethodsForUser(opts) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports._.fetchJson("/billing/payment_methods", __assign({}, opts))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.listPaymentMethodsForUser = listPaymentMethodsForUser;
function listAccountTypesForUser(opts) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports._.fetchJson("/accounts/types", __assign({}, opts))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.listAccountTypesForUser = listAccountTypesForUser;
function listAccountsForUser(opts) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports._.fetchJson("/accounts", __assign({}, opts))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.listAccountsForUser = listAccountsForUser;
function createAccount(body, opts) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports._.fetchJson("/accounts", exports._.json(__assign(__assign({}, opts), { method: "POST", body: body })))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.createAccount = createAccount;
function getAccount(accountId, opts) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports._.fetchJson("/accounts/" + accountId, __assign({}, opts))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.getAccount = getAccount;
function updateAccount(accountId, body, opts) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports._.fetchJson("/accounts/" + accountId, exports._.json(__assign(__assign({}, opts), { method: "PUT", body: body })))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.updateAccount = updateAccount;
function cancelAccount(accountId, opts) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports._.fetch("/accounts/" + accountId, __assign(__assign({}, opts), { method: "DELETE" }))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.cancelAccount = cancelAccount;
function listAccountAuditEvents(accountId, _a, opts) {
    var _b = _a === void 0 ? {} : _a, query = _b.query, logType = _b.logType;
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, exports._.fetchJson("/accounts/" + accountId + "/audit" + exports.QS.query(exports.QS.form({
                        query: query,
                        log_type: logType
                    })), __assign({}, opts))];
                case 1: return [2 /*return*/, _c.sent()];
            }
        });
    });
}
exports.listAccountAuditEvents = listAccountAuditEvents;
function listFormSubmission(submissionId, _a, opts) {
    var query = (_a === void 0 ? {} : _a).query;
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, exports._.fetchJson("/submissions/" + submissionId + exports.QS.query(exports.QS.form({
                        query: query
                    })), __assign({}, opts))];
                case 1: return [2 /*return*/, _b.sent()];
            }
        });
    });
}
exports.listFormSubmission = listFormSubmission;
function deleteSubmission(submissionId, opts) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports._.fetch("/submissions/" + submissionId, __assign(__assign({}, opts), { method: "DELETE" }))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.deleteSubmission = deleteSubmission;
function createServiceInstance(siteId, addon, body, opts) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports._.fetchJson("/sites/" + siteId + "/services/" + addon + "/instances", exports._.json(__assign(__assign({}, opts), { method: "POST", body: body })))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.createServiceInstance = createServiceInstance;
function showServiceInstance(siteId, addon, opts) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports._.fetchJson("/sites/" + siteId + "/services/" + addon + "/instances", __assign({}, opts))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.showServiceInstance = showServiceInstance;
function updateServiceInstance(siteId, addon, body, opts) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports._.fetch("/sites/" + siteId + "/services/" + addon + "/instances", exports._.json(__assign(__assign({}, opts), { method: "PUT", body: body })))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.updateServiceInstance = updateServiceInstance;
function deleteServiceInstance(siteId, addon, opts) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports._.fetch("/sites/" + siteId + "/services/" + addon + "/instances", __assign(__assign({}, opts), { method: "DELETE" }))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.deleteServiceInstance = deleteServiceInstance;
function getServices(_a, opts) {
    var search = (_a === void 0 ? {} : _a).search;
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, exports._.fetchJson("/services/" + exports.QS.query(exports.QS.form({
                        search: search
                    })), __assign({}, opts))];
                case 1: return [2 /*return*/, _b.sent()];
            }
        });
    });
}
exports.getServices = getServices;
function showService(addonName, opts) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports._.fetchJson("/services/" + addonName, __assign({}, opts))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.showService = showService;
function showServiceManifest(addonName, opts) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports._.fetchJson("/services/" + addonName + "/manifest", __assign({}, opts))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.showServiceManifest = showServiceManifest;
function getCurrentUser(opts) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports._.fetchJson("/user", __assign({}, opts))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.getCurrentUser = getCurrentUser;
function createSplitTest(siteId, body, opts) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports._.fetchJson("/site/" + siteId + "/traffic_splits", exports._.json(__assign(__assign({}, opts), { method: "POST", body: body })))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.createSplitTest = createSplitTest;
function getSplitTests(siteId, opts) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports._.fetchJson("/site/" + siteId + "/traffic_splits", __assign({}, opts))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.getSplitTests = getSplitTests;
function updateSplitTest(siteId, splitTestId, body, opts) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports._.fetchJson("/site/" + siteId + "/traffic_splits/" + splitTestId, exports._.json(__assign(__assign({}, opts), { method: "PUT", body: body })))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.updateSplitTest = updateSplitTest;
function getSplitTest(siteId, splitTestId, opts) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports._.fetchJson("/site/" + siteId + "/traffic_splits/" + splitTestId, __assign({}, opts))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.getSplitTest = getSplitTest;
function enableSplitTest(siteId, splitTestId, opts) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports._.fetch("/site/" + siteId + "/traffic_splits/" + splitTestId + "/publish", __assign(__assign({}, opts), { method: "POST" }))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.enableSplitTest = enableSplitTest;
function disableSplitTest(siteId, splitTestId, opts) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports._.fetch("/site/" + siteId + "/traffic_splits/" + splitTestId + "/unpublish", __assign(__assign({}, opts), { method: "POST" }))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.disableSplitTest = disableSplitTest;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
