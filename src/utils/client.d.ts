/**
 * Netlify's API documentation
 * 0.13.3
 * DO NOT MODIFY - This file has been generated using oazapfts.
 * See https://www.npmjs.com/package/oazapfts
 */
export declare const defaults: RequestOpts;
export declare const servers: {
    server1: string;
};
declare type Encoders = Array<(s: string) => string>;
export declare type RequestOpts = {
    baseUrl?: string;
    fetch?: typeof fetch;
    headers?: Record<string, string | undefined>;
} & Omit<RequestInit, "body" | "headers">;
declare type FetchRequestOpts = RequestOpts & {
    body?: string | FormData;
};
declare type JsonRequestOpts = RequestOpts & {
    body: object;
};
declare type MultipartRequestOpts = RequestOpts & {
    body: Record<string, string | Blob | undefined | any>;
};
export declare const _: {
    fetch(url: string, req?: FetchRequestOpts): Promise<string>;
    fetchJson(url: string, req?: FetchRequestOpts): Promise<any>;
    json({ body, headers, ...req }: JsonRequestOpts): {
        body: string;
        headers: {
            "Content-Type": string;
        };
        baseUrl?: string;
        fetch?: typeof fetch;
        window?: any;
        cache?: RequestCache;
        credentials?: RequestCredentials;
        integrity?: string;
        keepalive?: boolean;
        method?: string;
        mode?: RequestMode;
        redirect?: RequestRedirect;
        referrer?: string;
        referrerPolicy?: ReferrerPolicy;
        signal?: AbortSignal;
    };
    form({ body, headers, ...req }: JsonRequestOpts): {
        body: string;
        headers: {
            "Content-Type": string;
        };
        baseUrl?: string;
        fetch?: typeof fetch;
        window?: any;
        cache?: RequestCache;
        credentials?: RequestCredentials;
        integrity?: string;
        keepalive?: boolean;
        method?: string;
        mode?: RequestMode;
        redirect?: RequestRedirect;
        referrer?: string;
        referrerPolicy?: ReferrerPolicy;
        signal?: AbortSignal;
    };
    multipart({ body, ...req }: MultipartRequestOpts): {
        body: FormData;
        baseUrl?: string;
        fetch?: typeof fetch;
        headers?: Record<string, string>;
        window?: any;
        cache?: RequestCache;
        credentials?: RequestCredentials;
        integrity?: string;
        keepalive?: boolean;
        method?: string;
        mode?: RequestMode;
        redirect?: RequestRedirect;
        referrer?: string;
        referrerPolicy?: ReferrerPolicy;
        signal?: AbortSignal;
    };
    /**
     * Deeply remove all properties with undefined values.
     */
    stripUndefined<T>(obj: T): any;
    encodeReserved: (typeof encodeURIComponent)[];
    allowReserved: (typeof encodeURIComponent)[];
    /**
     * Creates a tag-function to encode template strings with the given encoders.
     */
    encode(encoders: Encoders, delimiter?: string): (strings: TemplateStringsArray, ...values: any[]) => string;
    /**
     * Separate array values by the given delimiter.
     */
    delimited(delimiter?: string): (params: Record<string, any>, encoders?: (typeof encodeURIComponent)[]) => string;
    joinUrl(...parts: string[]): string;
};
/**
 * Functions to serialize query parameters in different styles.
 */
export declare const QS: {
    /**
     * Join params using an ampersand and prepends a questionmark if not empty.
     */
    query(...params: string[]): string;
    /**
     * Serializes nested objects according to the `deepObject` style specified in
     * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md#style-values
     */
    deep(params: Record<string, any>, [k, v]?: (typeof encodeURIComponent)[]): string;
    /**
     * Property values of type array or object generate separate parameters
     * for each value of the array, or key-value-pair of the map.
     * For other types of properties this property has no effect.
     * See https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md#encoding-object
     */
    explode(params: Record<string, any>, encoders?: (typeof encodeURIComponent)[]): string;
    form: (params: Record<string, any>, encoders?: (typeof encodeURIComponent)[]) => string;
    pipe: (params: Record<string, any>, encoders?: (typeof encodeURIComponent)[]) => string;
    space: (params: Record<string, any>, encoders?: (typeof encodeURIComponent)[]) => string;
};
export declare class HttpError extends Error {
    status: number;
    constructor(status: number, message: string, url: string);
}
export declare type ApiResult<Fn> = Fn extends (...args: any) => Promise<infer T> ? T : never;
export declare function listSites({ name, filter }?: {
    name?: string;
    filter?: "all" | "owner" | "guest";
}, opts?: RequestOpts): Promise<{
    id?: string;
    state?: string;
    plan?: string;
    name?: string;
    custom_domain?: string;
    domain_aliases?: string[];
    password?: string;
    notification_email?: string;
    url?: string;
    ssl_url?: string;
    admin_url?: string;
    screenshot_url?: string;
    created_at?: string;
    updated_at?: string;
    user_id?: string;
    session_id?: string;
    ssl?: boolean;
    force_ssl?: boolean;
    managed_dns?: boolean;
    deploy_url?: string;
    published_deploy?: {
        id?: string;
        site_id?: string;
        user_id?: string;
        build_id?: string;
        state?: string;
        name?: string;
        url?: string;
        ssl_url?: string;
        admin_url?: string;
        deploy_url?: string;
        deploy_ssl_url?: string;
        screenshot_url?: string;
        review_id?: number;
        draft?: boolean;
        required?: string[];
        required_functions?: string[];
        error_message?: string;
        branch?: string;
        commit_ref?: string;
        commit_url?: string;
        skipped?: boolean;
        created_at?: string;
        updated_at?: string;
        published_at?: string;
        title?: string;
        context?: string;
        locked?: boolean;
        review_url?: string;
        site_capabilities?: {
            large_media_enabled?: boolean;
        };
    };
    account_name?: string;
    account_slug?: string;
    git_provider?: string;
    deploy_hook?: string;
    capabilities?: {
        [key: string]: object;
    };
    processing_settings?: {
        skip?: boolean;
        css?: {
            bundle?: boolean;
            minify?: boolean;
        };
        js?: {
            bundle?: boolean;
            minify?: boolean;
        };
        images?: {
            optimize?: boolean;
        };
        html?: {
            pretty_urls?: boolean;
        };
    };
    build_settings?: {
        id?: number;
        provider?: string;
        deploy_key_id?: string;
        repo_path?: string;
        repo_branch?: string;
        dir?: string;
        cmd?: string;
        allowed_branches?: string[];
        public_repo?: boolean;
        private_logs?: boolean;
        repo_url?: string;
        env?: {
            [key: string]: string;
        };
        installation_id?: number;
    };
    id_domain?: string;
    default_hooks_data?: {
        access_token?: string;
    };
    build_image?: string;
}[]>;
export declare function createSite(body: {
    id?: string;
    state?: string;
    plan?: string;
    name?: string;
    custom_domain?: string;
    domain_aliases?: string[];
    password?: string;
    notification_email?: string;
    url?: string;
    ssl_url?: string;
    admin_url?: string;
    screenshot_url?: string;
    created_at?: string;
    updated_at?: string;
    user_id?: string;
    session_id?: string;
    ssl?: boolean;
    force_ssl?: boolean;
    managed_dns?: boolean;
    deploy_url?: string;
    published_deploy?: {
        id?: string;
        site_id?: string;
        user_id?: string;
        build_id?: string;
        state?: string;
        name?: string;
        url?: string;
        ssl_url?: string;
        admin_url?: string;
        deploy_url?: string;
        deploy_ssl_url?: string;
        screenshot_url?: string;
        review_id?: number;
        draft?: boolean;
        required?: string[];
        required_functions?: string[];
        error_message?: string;
        branch?: string;
        commit_ref?: string;
        commit_url?: string;
        skipped?: boolean;
        created_at?: string;
        updated_at?: string;
        published_at?: string;
        title?: string;
        context?: string;
        locked?: boolean;
        review_url?: string;
        site_capabilities?: {
            large_media_enabled?: boolean;
        };
    };
    account_name?: string;
    account_slug?: string;
    git_provider?: string;
    deploy_hook?: string;
    capabilities?: {
        [key: string]: object;
    };
    processing_settings?: {
        skip?: boolean;
        css?: {
            bundle?: boolean;
            minify?: boolean;
        };
        js?: {
            bundle?: boolean;
            minify?: boolean;
        };
        images?: {
            optimize?: boolean;
        };
        html?: {
            pretty_urls?: boolean;
        };
    };
    build_settings?: {
        id?: number;
        provider?: string;
        deploy_key_id?: string;
        repo_path?: string;
        repo_branch?: string;
        dir?: string;
        cmd?: string;
        allowed_branches?: string[];
        public_repo?: boolean;
        private_logs?: boolean;
        repo_url?: string;
        env?: {
            [key: string]: string;
        };
        installation_id?: number;
    };
    id_domain?: string;
    default_hooks_data?: {
        access_token?: string;
    };
    build_image?: string;
} & {
    repo?: {
        id?: number;
        provider?: string;
        deploy_key_id?: string;
        repo_path?: string;
        repo_branch?: string;
        dir?: string;
        cmd?: string;
        allowed_branches?: string[];
        public_repo?: boolean;
        private_logs?: boolean;
        repo_url?: string;
        env?: {
            [key: string]: string;
        };
        installation_id?: number;
    };
}, { configureDns }?: {
    configureDns?: boolean;
}, opts?: RequestOpts): Promise<{
    id?: string;
    state?: string;
    plan?: string;
    name?: string;
    custom_domain?: string;
    domain_aliases?: string[];
    password?: string;
    notification_email?: string;
    url?: string;
    ssl_url?: string;
    admin_url?: string;
    screenshot_url?: string;
    created_at?: string;
    updated_at?: string;
    user_id?: string;
    session_id?: string;
    ssl?: boolean;
    force_ssl?: boolean;
    managed_dns?: boolean;
    deploy_url?: string;
    published_deploy?: {
        id?: string;
        site_id?: string;
        user_id?: string;
        build_id?: string;
        state?: string;
        name?: string;
        url?: string;
        ssl_url?: string;
        admin_url?: string;
        deploy_url?: string;
        deploy_ssl_url?: string;
        screenshot_url?: string;
        review_id?: number;
        draft?: boolean;
        required?: string[];
        required_functions?: string[];
        error_message?: string;
        branch?: string;
        commit_ref?: string;
        commit_url?: string;
        skipped?: boolean;
        created_at?: string;
        updated_at?: string;
        published_at?: string;
        title?: string;
        context?: string;
        locked?: boolean;
        review_url?: string;
        site_capabilities?: {
            large_media_enabled?: boolean;
        };
    };
    account_name?: string;
    account_slug?: string;
    git_provider?: string;
    deploy_hook?: string;
    capabilities?: {
        [key: string]: object;
    };
    processing_settings?: {
        skip?: boolean;
        css?: {
            bundle?: boolean;
            minify?: boolean;
        };
        js?: {
            bundle?: boolean;
            minify?: boolean;
        };
        images?: {
            optimize?: boolean;
        };
        html?: {
            pretty_urls?: boolean;
        };
    };
    build_settings?: {
        id?: number;
        provider?: string;
        deploy_key_id?: string;
        repo_path?: string;
        repo_branch?: string;
        dir?: string;
        cmd?: string;
        allowed_branches?: string[];
        public_repo?: boolean;
        private_logs?: boolean;
        repo_url?: string;
        env?: {
            [key: string]: string;
        };
        installation_id?: number;
    };
    id_domain?: string;
    default_hooks_data?: {
        access_token?: string;
    };
    build_image?: string;
}>;
export declare function getSite(siteId: string, opts?: RequestOpts): Promise<{
    id?: string;
    state?: string;
    plan?: string;
    name?: string;
    custom_domain?: string;
    domain_aliases?: string[];
    password?: string;
    notification_email?: string;
    url?: string;
    ssl_url?: string;
    admin_url?: string;
    screenshot_url?: string;
    created_at?: string;
    updated_at?: string;
    user_id?: string;
    session_id?: string;
    ssl?: boolean;
    force_ssl?: boolean;
    managed_dns?: boolean;
    deploy_url?: string;
    published_deploy?: {
        id?: string;
        site_id?: string;
        user_id?: string;
        build_id?: string;
        state?: string;
        name?: string;
        url?: string;
        ssl_url?: string;
        admin_url?: string;
        deploy_url?: string;
        deploy_ssl_url?: string;
        screenshot_url?: string;
        review_id?: number;
        draft?: boolean;
        required?: string[];
        required_functions?: string[];
        error_message?: string;
        branch?: string;
        commit_ref?: string;
        commit_url?: string;
        skipped?: boolean;
        created_at?: string;
        updated_at?: string;
        published_at?: string;
        title?: string;
        context?: string;
        locked?: boolean;
        review_url?: string;
        site_capabilities?: {
            large_media_enabled?: boolean;
        };
    };
    account_name?: string;
    account_slug?: string;
    git_provider?: string;
    deploy_hook?: string;
    capabilities?: {
        [key: string]: object;
    };
    processing_settings?: {
        skip?: boolean;
        css?: {
            bundle?: boolean;
            minify?: boolean;
        };
        js?: {
            bundle?: boolean;
            minify?: boolean;
        };
        images?: {
            optimize?: boolean;
        };
        html?: {
            pretty_urls?: boolean;
        };
    };
    build_settings?: {
        id?: number;
        provider?: string;
        deploy_key_id?: string;
        repo_path?: string;
        repo_branch?: string;
        dir?: string;
        cmd?: string;
        allowed_branches?: string[];
        public_repo?: boolean;
        private_logs?: boolean;
        repo_url?: string;
        env?: {
            [key: string]: string;
        };
        installation_id?: number;
    };
    id_domain?: string;
    default_hooks_data?: {
        access_token?: string;
    };
    build_image?: string;
}>;
export declare function updateSite(siteId: string, body: {
    id?: string;
    state?: string;
    plan?: string;
    name?: string;
    custom_domain?: string;
    domain_aliases?: string[];
    password?: string;
    notification_email?: string;
    url?: string;
    ssl_url?: string;
    admin_url?: string;
    screenshot_url?: string;
    created_at?: string;
    updated_at?: string;
    user_id?: string;
    session_id?: string;
    ssl?: boolean;
    force_ssl?: boolean;
    managed_dns?: boolean;
    deploy_url?: string;
    published_deploy?: {
        id?: string;
        site_id?: string;
        user_id?: string;
        build_id?: string;
        state?: string;
        name?: string;
        url?: string;
        ssl_url?: string;
        admin_url?: string;
        deploy_url?: string;
        deploy_ssl_url?: string;
        screenshot_url?: string;
        review_id?: number;
        draft?: boolean;
        required?: string[];
        required_functions?: string[];
        error_message?: string;
        branch?: string;
        commit_ref?: string;
        commit_url?: string;
        skipped?: boolean;
        created_at?: string;
        updated_at?: string;
        published_at?: string;
        title?: string;
        context?: string;
        locked?: boolean;
        review_url?: string;
        site_capabilities?: {
            large_media_enabled?: boolean;
        };
    };
    account_name?: string;
    account_slug?: string;
    git_provider?: string;
    deploy_hook?: string;
    capabilities?: {
        [key: string]: object;
    };
    processing_settings?: {
        skip?: boolean;
        css?: {
            bundle?: boolean;
            minify?: boolean;
        };
        js?: {
            bundle?: boolean;
            minify?: boolean;
        };
        images?: {
            optimize?: boolean;
        };
        html?: {
            pretty_urls?: boolean;
        };
    };
    build_settings?: {
        id?: number;
        provider?: string;
        deploy_key_id?: string;
        repo_path?: string;
        repo_branch?: string;
        dir?: string;
        cmd?: string;
        allowed_branches?: string[];
        public_repo?: boolean;
        private_logs?: boolean;
        repo_url?: string;
        env?: {
            [key: string]: string;
        };
        installation_id?: number;
    };
    id_domain?: string;
    default_hooks_data?: {
        access_token?: string;
    };
    build_image?: string;
} & {
    repo?: {
        id?: number;
        provider?: string;
        deploy_key_id?: string;
        repo_path?: string;
        repo_branch?: string;
        dir?: string;
        cmd?: string;
        allowed_branches?: string[];
        public_repo?: boolean;
        private_logs?: boolean;
        repo_url?: string;
        env?: {
            [key: string]: string;
        };
        installation_id?: number;
    };
}, opts?: RequestOpts): Promise<{
    id?: string;
    state?: string;
    plan?: string;
    name?: string;
    custom_domain?: string;
    domain_aliases?: string[];
    password?: string;
    notification_email?: string;
    url?: string;
    ssl_url?: string;
    admin_url?: string;
    screenshot_url?: string;
    created_at?: string;
    updated_at?: string;
    user_id?: string;
    session_id?: string;
    ssl?: boolean;
    force_ssl?: boolean;
    managed_dns?: boolean;
    deploy_url?: string;
    published_deploy?: {
        id?: string;
        site_id?: string;
        user_id?: string;
        build_id?: string;
        state?: string;
        name?: string;
        url?: string;
        ssl_url?: string;
        admin_url?: string;
        deploy_url?: string;
        deploy_ssl_url?: string;
        screenshot_url?: string;
        review_id?: number;
        draft?: boolean;
        required?: string[];
        required_functions?: string[];
        error_message?: string;
        branch?: string;
        commit_ref?: string;
        commit_url?: string;
        skipped?: boolean;
        created_at?: string;
        updated_at?: string;
        published_at?: string;
        title?: string;
        context?: string;
        locked?: boolean;
        review_url?: string;
        site_capabilities?: {
            large_media_enabled?: boolean;
        };
    };
    account_name?: string;
    account_slug?: string;
    git_provider?: string;
    deploy_hook?: string;
    capabilities?: {
        [key: string]: object;
    };
    processing_settings?: {
        skip?: boolean;
        css?: {
            bundle?: boolean;
            minify?: boolean;
        };
        js?: {
            bundle?: boolean;
            minify?: boolean;
        };
        images?: {
            optimize?: boolean;
        };
        html?: {
            pretty_urls?: boolean;
        };
    };
    build_settings?: {
        id?: number;
        provider?: string;
        deploy_key_id?: string;
        repo_path?: string;
        repo_branch?: string;
        dir?: string;
        cmd?: string;
        allowed_branches?: string[];
        public_repo?: boolean;
        private_logs?: boolean;
        repo_url?: string;
        env?: {
            [key: string]: string;
        };
        installation_id?: number;
    };
    id_domain?: string;
    default_hooks_data?: {
        access_token?: string;
    };
    build_image?: string;
}>;
export declare function deleteSite(siteId: string, opts?: RequestOpts): Promise<string>;
export declare function provisionSiteTlsCertificate(siteId: string, { certificate, key, caCertificates }?: {
    certificate?: string;
    key?: string;
    caCertificates?: string;
}, opts?: RequestOpts): Promise<{
    state?: string;
    domains?: string[];
    created_at?: string;
    updated_at?: string;
    expires_at?: string;
}>;
export declare function showSiteTlsCertificate(siteId: string, opts?: RequestOpts): Promise<{
    state?: string;
    domains?: string[];
    created_at?: string;
    updated_at?: string;
    expires_at?: string;
}>;
export declare function listSiteForms(siteId: string, opts?: RequestOpts): Promise<{
    id?: string;
    site_id?: string;
    name?: string;
    paths?: string[];
    submission_count?: number;
    fields?: object[];
    created_at?: string;
}[]>;
export declare function listSiteSubmissions(siteId: string, opts?: RequestOpts): Promise<{
    id?: string;
    number?: number;
    email?: string;
    name?: string;
    first_name?: string;
    last_name?: string;
    company?: string;
    summary?: string;
    body?: string;
    data?: object;
    created_at?: string;
    site_url?: string;
}[]>;
export declare function listSiteFiles(siteId: string, opts?: RequestOpts): Promise<{
    id?: string;
    path?: string;
    sha?: string;
    mime_type?: string;
    size?: number;
}[]>;
export declare function listSiteAssets(siteId: string, opts?: RequestOpts): Promise<{
    id?: string;
    site_id?: string;
    creator_id?: string;
    name?: string;
    state?: string;
    content_type?: string;
    url?: string;
    key?: string;
    visibility?: string;
    size?: number;
    created_at?: string;
    updated_at?: string;
}[]>;
export declare function createSiteAsset(siteId: string, name: string, size: number, contentType: string, { visibility }?: {
    visibility?: string;
}, opts?: RequestOpts): Promise<{
    form?: {
        url?: string;
        fields?: {
            [key: string]: string;
        };
    };
    asset?: {
        id?: string;
        site_id?: string;
        creator_id?: string;
        name?: string;
        state?: string;
        content_type?: string;
        url?: string;
        key?: string;
        visibility?: string;
        size?: number;
        created_at?: string;
        updated_at?: string;
    };
}>;
export declare function getSiteAssetInfo(siteId: string, assetId: string, opts?: RequestOpts): Promise<{
    id?: string;
    site_id?: string;
    creator_id?: string;
    name?: string;
    state?: string;
    content_type?: string;
    url?: string;
    key?: string;
    visibility?: string;
    size?: number;
    created_at?: string;
    updated_at?: string;
}>;
export declare function updateSiteAsset(siteId: string, assetId: string, state: string, opts?: RequestOpts): Promise<{
    id?: string;
    site_id?: string;
    creator_id?: string;
    name?: string;
    state?: string;
    content_type?: string;
    url?: string;
    key?: string;
    visibility?: string;
    size?: number;
    created_at?: string;
    updated_at?: string;
}>;
export declare function deleteSiteAsset(siteId: string, assetId: string, opts?: RequestOpts): Promise<string>;
export declare function getSiteAssetPublicSignature(siteId: string, assetId: string, opts?: RequestOpts): Promise<{
    url?: string;
}>;
export declare function getSiteFileByPathName(siteId: string, filePath: string, opts?: RequestOpts): Promise<{
    id?: string;
    path?: string;
    sha?: string;
    mime_type?: string;
    size?: number;
}>;
export declare function listSiteSnippets(siteId: string, opts?: RequestOpts): Promise<{
    id?: number;
    site_id?: string;
    title?: string;
    general?: string;
    general_position?: string;
    goal?: string;
    goal_position?: string;
}[]>;
export declare function createSiteSnippet(siteId: string, body: {
    id?: number;
    site_id?: string;
    title?: string;
    general?: string;
    general_position?: string;
    goal?: string;
    goal_position?: string;
}, opts?: RequestOpts): Promise<{
    id?: number;
    site_id?: string;
    title?: string;
    general?: string;
    general_position?: string;
    goal?: string;
    goal_position?: string;
}>;
export declare function getSiteSnippet(siteId: string, snippetId: string, opts?: RequestOpts): Promise<{
    id?: number;
    site_id?: string;
    title?: string;
    general?: string;
    general_position?: string;
    goal?: string;
    goal_position?: string;
}>;
export declare function updateSiteSnippet(siteId: string, snippetId: string, body: {
    id?: number;
    site_id?: string;
    title?: string;
    general?: string;
    general_position?: string;
    goal?: string;
    goal_position?: string;
}, opts?: RequestOpts): Promise<string>;
export declare function deleteSiteSnippet(siteId: string, snippetId: string, opts?: RequestOpts): Promise<string>;
export declare function getSiteMetadata(siteId: string, opts?: RequestOpts): Promise<object>;
export declare function updateSiteMetadata(siteId: string, body: object, opts?: RequestOpts): Promise<string>;
export declare function listSiteBuildHooks(siteId: string, opts?: RequestOpts): Promise<{
    id?: string;
    title?: string;
    branch?: string;
    url?: string;
    site_id?: string;
    created_at?: string;
}[]>;
export declare function createSiteBuildHook(siteId: string, body: {
    id?: string;
    title?: string;
    branch?: string;
    url?: string;
    site_id?: string;
    created_at?: string;
}, opts?: RequestOpts): Promise<{
    id?: string;
    title?: string;
    branch?: string;
    url?: string;
    site_id?: string;
    created_at?: string;
}>;
export declare function getSiteBuildHook(siteId: string, id: string, opts?: RequestOpts): Promise<{
    id?: string;
    title?: string;
    branch?: string;
    url?: string;
    site_id?: string;
    created_at?: string;
}>;
export declare function updateSiteBuildHook(siteId: string, id: string, body: {
    id?: string;
    title?: string;
    branch?: string;
    url?: string;
    site_id?: string;
    created_at?: string;
}, opts?: RequestOpts): Promise<string>;
export declare function deleteSiteBuildHook(siteId: string, id: string, opts?: RequestOpts): Promise<string>;
export declare function listSiteDeploys(siteId: string, opts?: RequestOpts): Promise<{
    id?: string;
    site_id?: string;
    user_id?: string;
    build_id?: string;
    state?: string;
    name?: string;
    url?: string;
    ssl_url?: string;
    admin_url?: string;
    deploy_url?: string;
    deploy_ssl_url?: string;
    screenshot_url?: string;
    review_id?: number;
    draft?: boolean;
    required?: string[];
    required_functions?: string[];
    error_message?: string;
    branch?: string;
    commit_ref?: string;
    commit_url?: string;
    skipped?: boolean;
    created_at?: string;
    updated_at?: string;
    published_at?: string;
    title?: string;
    context?: string;
    locked?: boolean;
    review_url?: string;
    site_capabilities?: {
        large_media_enabled?: boolean;
    };
}[]>;
export declare function createSiteDeploy(siteId: string, body: {
    files?: object;
    draft?: boolean;
    "async"?: boolean;
    functions?: object;
}, { title }?: {
    title?: string;
}, opts?: RequestOpts): Promise<{
    id?: string;
    site_id?: string;
    user_id?: string;
    build_id?: string;
    state?: string;
    name?: string;
    url?: string;
    ssl_url?: string;
    admin_url?: string;
    deploy_url?: string;
    deploy_ssl_url?: string;
    screenshot_url?: string;
    review_id?: number;
    draft?: boolean;
    required?: string[];
    required_functions?: string[];
    error_message?: string;
    branch?: string;
    commit_ref?: string;
    commit_url?: string;
    skipped?: boolean;
    created_at?: string;
    updated_at?: string;
    published_at?: string;
    title?: string;
    context?: string;
    locked?: boolean;
    review_url?: string;
    site_capabilities?: {
        large_media_enabled?: boolean;
    };
}>;
export declare function getSiteDeploy(siteId: string, deployId: string, opts?: RequestOpts): Promise<{
    id?: string;
    site_id?: string;
    user_id?: string;
    build_id?: string;
    state?: string;
    name?: string;
    url?: string;
    ssl_url?: string;
    admin_url?: string;
    deploy_url?: string;
    deploy_ssl_url?: string;
    screenshot_url?: string;
    review_id?: number;
    draft?: boolean;
    required?: string[];
    required_functions?: string[];
    error_message?: string;
    branch?: string;
    commit_ref?: string;
    commit_url?: string;
    skipped?: boolean;
    created_at?: string;
    updated_at?: string;
    published_at?: string;
    title?: string;
    context?: string;
    locked?: boolean;
    review_url?: string;
    site_capabilities?: {
        large_media_enabled?: boolean;
    };
}>;
export declare function updateSiteDeploy(siteId: string, deployId: string, body: {
    files?: object;
    draft?: boolean;
    "async"?: boolean;
    functions?: object;
}, opts?: RequestOpts): Promise<{
    id?: string;
    site_id?: string;
    user_id?: string;
    build_id?: string;
    state?: string;
    name?: string;
    url?: string;
    ssl_url?: string;
    admin_url?: string;
    deploy_url?: string;
    deploy_ssl_url?: string;
    screenshot_url?: string;
    review_id?: number;
    draft?: boolean;
    required?: string[];
    required_functions?: string[];
    error_message?: string;
    branch?: string;
    commit_ref?: string;
    commit_url?: string;
    skipped?: boolean;
    created_at?: string;
    updated_at?: string;
    published_at?: string;
    title?: string;
    context?: string;
    locked?: boolean;
    review_url?: string;
    site_capabilities?: {
        large_media_enabled?: boolean;
    };
}>;
export declare function cancelSiteDeploy(deployId: string, opts?: RequestOpts): Promise<{
    id?: string;
    site_id?: string;
    user_id?: string;
    build_id?: string;
    state?: string;
    name?: string;
    url?: string;
    ssl_url?: string;
    admin_url?: string;
    deploy_url?: string;
    deploy_ssl_url?: string;
    screenshot_url?: string;
    review_id?: number;
    draft?: boolean;
    required?: string[];
    required_functions?: string[];
    error_message?: string;
    branch?: string;
    commit_ref?: string;
    commit_url?: string;
    skipped?: boolean;
    created_at?: string;
    updated_at?: string;
    published_at?: string;
    title?: string;
    context?: string;
    locked?: boolean;
    review_url?: string;
    site_capabilities?: {
        large_media_enabled?: boolean;
    };
}>;
export declare function restoreSiteDeploy(siteId: string, deployId: string, opts?: RequestOpts): Promise<{
    id?: string;
    site_id?: string;
    user_id?: string;
    build_id?: string;
    state?: string;
    name?: string;
    url?: string;
    ssl_url?: string;
    admin_url?: string;
    deploy_url?: string;
    deploy_ssl_url?: string;
    screenshot_url?: string;
    review_id?: number;
    draft?: boolean;
    required?: string[];
    required_functions?: string[];
    error_message?: string;
    branch?: string;
    commit_ref?: string;
    commit_url?: string;
    skipped?: boolean;
    created_at?: string;
    updated_at?: string;
    published_at?: string;
    title?: string;
    context?: string;
    locked?: boolean;
    review_url?: string;
    site_capabilities?: {
        large_media_enabled?: boolean;
    };
}>;
export declare function listSiteBuilds(siteId: string, opts?: RequestOpts): Promise<{
    id?: string;
    deploy_id?: string;
    sha?: string;
    done?: boolean;
    error?: string;
    created_at?: string;
}[]>;
export declare function createSiteBuild(siteId: string, opts?: RequestOpts): Promise<{
    id?: string;
    deploy_id?: string;
    sha?: string;
    done?: boolean;
    error?: string;
    created_at?: string;
}>;
export declare function listSiteDeployedBranches(siteId: string, opts?: RequestOpts): Promise<{
    id?: string;
    deploy_id?: string;
    name?: string;
    slug?: string;
    url?: string;
    ssl_url?: string;
}[]>;
export declare function getSiteBuild(buildId: string, opts?: RequestOpts): Promise<{
    id?: string;
    deploy_id?: string;
    sha?: string;
    done?: boolean;
    error?: string;
    created_at?: string;
}>;
export declare function updateSiteBuildLog(buildId: string, opts?: RequestOpts): Promise<string>;
export declare function notifyBuildStart(buildId: string, opts?: RequestOpts): Promise<string>;
export declare function getDnsForSite(siteId: string, opts?: RequestOpts): Promise<{
    id?: string;
    name?: string;
    records?: {
        id?: string;
        hostname?: string;
        type?: string;
        value?: string;
        ttl?: number;
        priority?: number;
    }[];
}[]>;
export declare function configureDnsForSite(siteId: string, opts?: RequestOpts): Promise<{
    id?: string;
    name?: string;
    records?: {
        id?: string;
        hostname?: string;
        type?: string;
        value?: string;
        ttl?: number;
        priority?: number;
    }[];
}[]>;
export declare function getDeploy(deployId: string, opts?: RequestOpts): Promise<{
    id?: string;
    site_id?: string;
    user_id?: string;
    build_id?: string;
    state?: string;
    name?: string;
    url?: string;
    ssl_url?: string;
    admin_url?: string;
    deploy_url?: string;
    deploy_ssl_url?: string;
    screenshot_url?: string;
    review_id?: number;
    draft?: boolean;
    required?: string[];
    required_functions?: string[];
    error_message?: string;
    branch?: string;
    commit_ref?: string;
    commit_url?: string;
    skipped?: boolean;
    created_at?: string;
    updated_at?: string;
    published_at?: string;
    title?: string;
    context?: string;
    locked?: boolean;
    review_url?: string;
    site_capabilities?: {
        large_media_enabled?: boolean;
    };
}>;
export declare function lockDeploy(deployId: string, opts?: RequestOpts): Promise<{
    id?: string;
    site_id?: string;
    user_id?: string;
    build_id?: string;
    state?: string;
    name?: string;
    url?: string;
    ssl_url?: string;
    admin_url?: string;
    deploy_url?: string;
    deploy_ssl_url?: string;
    screenshot_url?: string;
    review_id?: number;
    draft?: boolean;
    required?: string[];
    required_functions?: string[];
    error_message?: string;
    branch?: string;
    commit_ref?: string;
    commit_url?: string;
    skipped?: boolean;
    created_at?: string;
    updated_at?: string;
    published_at?: string;
    title?: string;
    context?: string;
    locked?: boolean;
    review_url?: string;
    site_capabilities?: {
        large_media_enabled?: boolean;
    };
}>;
export declare function unlockDeploy(deployId: string, opts?: RequestOpts): Promise<{
    id?: string;
    site_id?: string;
    user_id?: string;
    build_id?: string;
    state?: string;
    name?: string;
    url?: string;
    ssl_url?: string;
    admin_url?: string;
    deploy_url?: string;
    deploy_ssl_url?: string;
    screenshot_url?: string;
    review_id?: number;
    draft?: boolean;
    required?: string[];
    required_functions?: string[];
    error_message?: string;
    branch?: string;
    commit_ref?: string;
    commit_url?: string;
    skipped?: boolean;
    created_at?: string;
    updated_at?: string;
    published_at?: string;
    title?: string;
    context?: string;
    locked?: boolean;
    review_url?: string;
    site_capabilities?: {
        large_media_enabled?: boolean;
    };
}>;
export declare function uploadDeployFile(deployId: string, path: string, body: string, { size }?: {
    size?: number;
}, opts?: RequestOpts): Promise<{
    id?: string;
    path?: string;
    sha?: string;
    mime_type?: string;
    size?: number;
}>;
export declare function uploadDeployFunction(deployId: string, name: string, body: string, { runtime, size }?: {
    runtime?: string;
    size?: number;
}, opts?: RequestOpts): Promise<{
    id?: string;
    name?: string;
    sha?: string;
}>;
export declare function listForms({ siteId }?: {
    siteId?: string;
}, opts?: RequestOpts): Promise<{
    id?: string;
    site_id?: string;
    name?: string;
    paths?: string[];
    submission_count?: number;
    fields?: object[];
    created_at?: string;
}[]>;
export declare function listFormSubmissions(formId: string, opts?: RequestOpts): Promise<{
    id?: string;
    number?: number;
    email?: string;
    name?: string;
    first_name?: string;
    last_name?: string;
    company?: string;
    summary?: string;
    body?: string;
    data?: object;
    created_at?: string;
    site_url?: string;
}[]>;
export declare function listHooksBySiteId(siteId: string, opts?: RequestOpts): Promise<{
    id?: string;
    site_id?: string;
    type?: string;
    event?: string;
    data?: object;
    created_at?: string;
    updated_at?: string;
    disabled?: boolean;
}[]>;
export declare function createHookBySiteId(siteId: string, body: {
    id?: string;
    site_id?: string;
    "type"?: string;
    event?: string;
    data?: object;
    created_at?: string;
    updated_at?: string;
    disabled?: boolean;
}, opts?: RequestOpts): Promise<{
    id?: string;
    site_id?: string;
    type?: string;
    event?: string;
    data?: object;
    created_at?: string;
    updated_at?: string;
    disabled?: boolean;
}>;
export declare function getHook(hookId: string, opts?: RequestOpts): Promise<{
    id?: string;
    site_id?: string;
    type?: string;
    event?: string;
    data?: object;
    created_at?: string;
    updated_at?: string;
    disabled?: boolean;
}>;
export declare function updateHook(hookId: string, body: {
    id?: string;
    site_id?: string;
    "type"?: string;
    event?: string;
    data?: object;
    created_at?: string;
    updated_at?: string;
    disabled?: boolean;
}, opts?: RequestOpts): Promise<{
    id?: string;
    site_id?: string;
    type?: string;
    event?: string;
    data?: object;
    created_at?: string;
    updated_at?: string;
    disabled?: boolean;
}>;
export declare function deleteHook(hookId: string, opts?: RequestOpts): Promise<string>;
export declare function enableHook(hookId: string, opts?: RequestOpts): Promise<{
    id?: string;
    site_id?: string;
    type?: string;
    event?: string;
    data?: object;
    created_at?: string;
    updated_at?: string;
    disabled?: boolean;
}>;
export declare function listHookTypes(opts?: RequestOpts): Promise<{
    name?: string;
    events?: string[];
    fields?: object[];
}[]>;
export declare function createTicket(clientId: string, opts?: RequestOpts): Promise<{
    id?: string;
    client_id?: string;
    authorized?: boolean;
    created_at?: string;
}>;
export declare function showTicket(ticketId: string, opts?: RequestOpts): Promise<{
    id?: string;
    client_id?: string;
    authorized?: boolean;
    created_at?: string;
}>;
export declare function exchangeTicket(ticketId: string, opts?: RequestOpts): Promise<{
    id?: string;
    access_token?: string;
    user_id?: string;
    user_email?: string;
    created_at?: string;
}>;
export declare function listDeployKeys(opts?: RequestOpts): Promise<{
    id?: string;
    public_key?: string;
    created_at?: string;
}[]>;
export declare function createDeployKey(opts?: RequestOpts): Promise<{
    id?: string;
    public_key?: string;
    created_at?: string;
}>;
export declare function getDeployKey(keyId: string, opts?: RequestOpts): Promise<{
    id?: string;
    public_key?: string;
    created_at?: string;
}>;
export declare function deleteDeployKey(keyId: string, opts?: RequestOpts): Promise<string>;
export declare function createSiteInTeam(accountSlug: string, body: {
    id?: string;
    state?: string;
    plan?: string;
    name?: string;
    custom_domain?: string;
    domain_aliases?: string[];
    password?: string;
    notification_email?: string;
    url?: string;
    ssl_url?: string;
    admin_url?: string;
    screenshot_url?: string;
    created_at?: string;
    updated_at?: string;
    user_id?: string;
    session_id?: string;
    ssl?: boolean;
    force_ssl?: boolean;
    managed_dns?: boolean;
    deploy_url?: string;
    published_deploy?: {
        id?: string;
        site_id?: string;
        user_id?: string;
        build_id?: string;
        state?: string;
        name?: string;
        url?: string;
        ssl_url?: string;
        admin_url?: string;
        deploy_url?: string;
        deploy_ssl_url?: string;
        screenshot_url?: string;
        review_id?: number;
        draft?: boolean;
        required?: string[];
        required_functions?: string[];
        error_message?: string;
        branch?: string;
        commit_ref?: string;
        commit_url?: string;
        skipped?: boolean;
        created_at?: string;
        updated_at?: string;
        published_at?: string;
        title?: string;
        context?: string;
        locked?: boolean;
        review_url?: string;
        site_capabilities?: {
            large_media_enabled?: boolean;
        };
    };
    account_name?: string;
    account_slug?: string;
    git_provider?: string;
    deploy_hook?: string;
    capabilities?: {
        [key: string]: object;
    };
    processing_settings?: {
        skip?: boolean;
        css?: {
            bundle?: boolean;
            minify?: boolean;
        };
        js?: {
            bundle?: boolean;
            minify?: boolean;
        };
        images?: {
            optimize?: boolean;
        };
        html?: {
            pretty_urls?: boolean;
        };
    };
    build_settings?: {
        id?: number;
        provider?: string;
        deploy_key_id?: string;
        repo_path?: string;
        repo_branch?: string;
        dir?: string;
        cmd?: string;
        allowed_branches?: string[];
        public_repo?: boolean;
        private_logs?: boolean;
        repo_url?: string;
        env?: {
            [key: string]: string;
        };
        installation_id?: number;
    };
    id_domain?: string;
    default_hooks_data?: {
        access_token?: string;
    };
    build_image?: string;
} & {
    repo?: {
        id?: number;
        provider?: string;
        deploy_key_id?: string;
        repo_path?: string;
        repo_branch?: string;
        dir?: string;
        cmd?: string;
        allowed_branches?: string[];
        public_repo?: boolean;
        private_logs?: boolean;
        repo_url?: string;
        env?: {
            [key: string]: string;
        };
        installation_id?: number;
    };
}, { configureDns }?: {
    configureDns?: boolean;
}, opts?: RequestOpts): Promise<{
    id?: string;
    state?: string;
    plan?: string;
    name?: string;
    custom_domain?: string;
    domain_aliases?: string[];
    password?: string;
    notification_email?: string;
    url?: string;
    ssl_url?: string;
    admin_url?: string;
    screenshot_url?: string;
    created_at?: string;
    updated_at?: string;
    user_id?: string;
    session_id?: string;
    ssl?: boolean;
    force_ssl?: boolean;
    managed_dns?: boolean;
    deploy_url?: string;
    published_deploy?: {
        id?: string;
        site_id?: string;
        user_id?: string;
        build_id?: string;
        state?: string;
        name?: string;
        url?: string;
        ssl_url?: string;
        admin_url?: string;
        deploy_url?: string;
        deploy_ssl_url?: string;
        screenshot_url?: string;
        review_id?: number;
        draft?: boolean;
        required?: string[];
        required_functions?: string[];
        error_message?: string;
        branch?: string;
        commit_ref?: string;
        commit_url?: string;
        skipped?: boolean;
        created_at?: string;
        updated_at?: string;
        published_at?: string;
        title?: string;
        context?: string;
        locked?: boolean;
        review_url?: string;
        site_capabilities?: {
            large_media_enabled?: boolean;
        };
    };
    account_name?: string;
    account_slug?: string;
    git_provider?: string;
    deploy_hook?: string;
    capabilities?: {
        [key: string]: object;
    };
    processing_settings?: {
        skip?: boolean;
        css?: {
            bundle?: boolean;
            minify?: boolean;
        };
        js?: {
            bundle?: boolean;
            minify?: boolean;
        };
        images?: {
            optimize?: boolean;
        };
        html?: {
            pretty_urls?: boolean;
        };
    };
    build_settings?: {
        id?: number;
        provider?: string;
        deploy_key_id?: string;
        repo_path?: string;
        repo_branch?: string;
        dir?: string;
        cmd?: string;
        allowed_branches?: string[];
        public_repo?: boolean;
        private_logs?: boolean;
        repo_url?: string;
        env?: {
            [key: string]: string;
        };
        installation_id?: number;
    };
    id_domain?: string;
    default_hooks_data?: {
        access_token?: string;
    };
    build_image?: string;
}>;
export declare function listSitesForAccount(accountSlug: string, { name }?: {
    name?: string;
}, opts?: RequestOpts): Promise<{
    id?: string;
    state?: string;
    plan?: string;
    name?: string;
    custom_domain?: string;
    domain_aliases?: string[];
    password?: string;
    notification_email?: string;
    url?: string;
    ssl_url?: string;
    admin_url?: string;
    screenshot_url?: string;
    created_at?: string;
    updated_at?: string;
    user_id?: string;
    session_id?: string;
    ssl?: boolean;
    force_ssl?: boolean;
    managed_dns?: boolean;
    deploy_url?: string;
    published_deploy?: {
        id?: string;
        site_id?: string;
        user_id?: string;
        build_id?: string;
        state?: string;
        name?: string;
        url?: string;
        ssl_url?: string;
        admin_url?: string;
        deploy_url?: string;
        deploy_ssl_url?: string;
        screenshot_url?: string;
        review_id?: number;
        draft?: boolean;
        required?: string[];
        required_functions?: string[];
        error_message?: string;
        branch?: string;
        commit_ref?: string;
        commit_url?: string;
        skipped?: boolean;
        created_at?: string;
        updated_at?: string;
        published_at?: string;
        title?: string;
        context?: string;
        locked?: boolean;
        review_url?: string;
        site_capabilities?: {
            large_media_enabled?: boolean;
        };
    };
    account_name?: string;
    account_slug?: string;
    git_provider?: string;
    deploy_hook?: string;
    capabilities?: {
        [key: string]: object;
    };
    processing_settings?: {
        skip?: boolean;
        css?: {
            bundle?: boolean;
            minify?: boolean;
        };
        js?: {
            bundle?: boolean;
            minify?: boolean;
        };
        images?: {
            optimize?: boolean;
        };
        html?: {
            pretty_urls?: boolean;
        };
    };
    build_settings?: {
        id?: number;
        provider?: string;
        deploy_key_id?: string;
        repo_path?: string;
        repo_branch?: string;
        dir?: string;
        cmd?: string;
        allowed_branches?: string[];
        public_repo?: boolean;
        private_logs?: boolean;
        repo_url?: string;
        env?: {
            [key: string]: string;
        };
        installation_id?: number;
    };
    id_domain?: string;
    default_hooks_data?: {
        access_token?: string;
    };
    build_image?: string;
}[]>;
export declare function listMembersForAccount(accountSlug: string, opts?: RequestOpts): Promise<{
    id?: string;
    full_name?: string;
    email?: string;
    avatar?: string;
    role?: string;
}[]>;
export declare function addMemberToAccount(accountSlug: string, email: string, { role }?: {
    role?: "Owner" | "Collaborator" | "Controller";
}, opts?: RequestOpts): Promise<{
    id?: string;
    full_name?: string;
    email?: string;
    avatar?: string;
    role?: string;
}[]>;
export declare function listPaymentMethodsForUser(opts?: RequestOpts): Promise<{
    id?: string;
    method_name?: string;
    type?: string;
    state?: string;
    data?: {
        card_type?: string;
        last4?: string;
        email?: string;
    };
    created_at?: string;
    updated_at?: string;
}[]>;
export declare function listAccountTypesForUser(opts?: RequestOpts): Promise<{
    id?: string;
    name?: string;
    description?: string;
    capabilities?: object;
    monthly_dollar_price?: number;
    yearly_dollar_price?: number;
    monthly_seats_addon_dollar_price?: number;
    yearly_seats_addon_dollar_price?: number;
}[]>;
export declare function listAccountsForUser(opts?: RequestOpts): Promise<{
    id?: string;
    name?: string;
    slug?: string;
    type?: string;
    capabilities?: {
        sites?: {
            included?: number;
            used?: number;
        };
        collaborators?: {
            included?: number;
            used?: number;
        };
    };
    billing_name?: string;
    billing_email?: string;
    billing_details?: string;
    billing_period?: string;
    payment_method_id?: string;
    type_name?: string;
    type_id?: string;
    owner_ids?: string[];
    roles_allowed?: string[];
    created_at?: string;
    updated_at?: string;
}[]>;
export declare function createAccount(body: {
    name: string;
    type_id: string;
    payment_method_id?: string;
    period?: "monthly" | "yearly";
    extra_seats_block?: number;
}, opts?: RequestOpts): Promise<{
    id?: string;
    name?: string;
    slug?: string;
    type?: string;
    capabilities?: {
        sites?: {
            included?: number;
            used?: number;
        };
        collaborators?: {
            included?: number;
            used?: number;
        };
    };
    billing_name?: string;
    billing_email?: string;
    billing_details?: string;
    billing_period?: string;
    payment_method_id?: string;
    type_name?: string;
    type_id?: string;
    owner_ids?: string[];
    roles_allowed?: string[];
    created_at?: string;
    updated_at?: string;
}>;
export declare function getAccount(accountId: string, opts?: RequestOpts): Promise<{
    id?: string;
    name?: string;
    slug?: string;
    type?: string;
    capabilities?: {
        sites?: {
            included?: number;
            used?: number;
        };
        collaborators?: {
            included?: number;
            used?: number;
        };
    };
    billing_name?: string;
    billing_email?: string;
    billing_details?: string;
    billing_period?: string;
    payment_method_id?: string;
    type_name?: string;
    type_id?: string;
    owner_ids?: string[];
    roles_allowed?: string[];
    created_at?: string;
    updated_at?: string;
}[]>;
export declare function updateAccount(accountId: string, body: {
    name?: string;
    slug?: string;
    type_id?: string;
    extra_seats_block?: number;
    billing_name?: string;
    billing_email?: string;
    billing_details?: string;
}, opts?: RequestOpts): Promise<{
    id?: string;
    name?: string;
    slug?: string;
    type?: string;
    capabilities?: {
        sites?: {
            included?: number;
            used?: number;
        };
        collaborators?: {
            included?: number;
            used?: number;
        };
    };
    billing_name?: string;
    billing_email?: string;
    billing_details?: string;
    billing_period?: string;
    payment_method_id?: string;
    type_name?: string;
    type_id?: string;
    owner_ids?: string[];
    roles_allowed?: string[];
    created_at?: string;
    updated_at?: string;
}>;
export declare function cancelAccount(accountId: string, opts?: RequestOpts): Promise<string>;
export declare function listAccountAuditEvents(accountId: string, { query, logType }?: {
    query?: string;
    logType?: string;
}, opts?: RequestOpts): Promise<{
    id?: string;
    account_id?: string;
    payload?: {
        [key: string]: object;
        actor_id?: string;
        actor_name?: string;
        actor_email?: string;
        action?: string;
        timestamp?: string;
        log_type?: string;
    };
}[]>;
export declare function listFormSubmission(submissionId: string, { query }?: {
    query?: string;
}, opts?: RequestOpts): Promise<{
    id?: string;
    number?: number;
    email?: string;
    name?: string;
    first_name?: string;
    last_name?: string;
    company?: string;
    summary?: string;
    body?: string;
    data?: object;
    created_at?: string;
    site_url?: string;
}[]>;
export declare function deleteSubmission(submissionId: string, opts?: RequestOpts): Promise<string>;
export declare function createServiceInstance(siteId: string, addon: string, body: object, opts?: RequestOpts): Promise<{
    id?: string;
    url?: string;
    config?: object;
    external_attributes?: object;
    service_slug?: string;
    service_path?: string;
    service_name?: string;
    env?: object;
    snippets?: object[];
    auth_url?: string;
    created_at?: string;
    updated_at?: string;
}>;
export declare function showServiceInstance(siteId: string, addon: string, opts?: RequestOpts): Promise<{
    id?: string;
    url?: string;
    config?: object;
    external_attributes?: object;
    service_slug?: string;
    service_path?: string;
    service_name?: string;
    env?: object;
    snippets?: object[];
    auth_url?: string;
    created_at?: string;
    updated_at?: string;
}>;
export declare function updateServiceInstance(siteId: string, addon: string, body: object, opts?: RequestOpts): Promise<string>;
export declare function deleteServiceInstance(siteId: string, addon: string, opts?: RequestOpts): Promise<string>;
export declare function getServices({ search }?: {
    search?: string;
}, opts?: RequestOpts): Promise<{
    id?: string;
    name?: string;
    slug?: string;
    service_path?: string;
    long_description?: string;
    description?: string;
    events?: object[];
    tags?: string[];
    icon?: string;
    manifest_url?: string;
    environments?: string[];
    created_at?: string;
    updated_at?: string;
}[]>;
export declare function showService(addonName: string, opts?: RequestOpts): Promise<{
    id?: string;
    url?: string;
    config?: object;
    external_attributes?: object;
    service_slug?: string;
    service_path?: string;
    service_name?: string;
    env?: object;
    snippets?: object[];
    auth_url?: string;
    created_at?: string;
    updated_at?: string;
}>;
export declare function showServiceManifest(addonName: string, opts?: RequestOpts): Promise<object>;
export declare function getCurrentUser(opts?: RequestOpts): Promise<{
    id?: string;
    uid?: string;
    full_name?: string;
    avatar_url?: string;
    email?: string;
    affiliate_id?: string;
    site_count?: number;
    created_at?: string;
    last_login?: string;
    login_providers?: string[];
    onboarding_progress?: {
        slides?: string;
    };
    support_priority?: number;
}[]>;
export declare function createSplitTest(siteId: string, body: {
    branch_tests?: object;
}, opts?: RequestOpts): Promise<{
    id?: string;
    site_id?: string;
    name?: string;
    path?: string;
    branches?: object[];
    active?: boolean;
    created_at?: string;
    updated_at?: string;
    unpublished_at?: string;
}>;
export declare function getSplitTests(siteId: string, opts?: RequestOpts): Promise<{
    id?: string;
    site_id?: string;
    name?: string;
    path?: string;
    branches?: object[];
    active?: boolean;
    created_at?: string;
    updated_at?: string;
    unpublished_at?: string;
}[]>;
export declare function updateSplitTest(siteId: string, splitTestId: string, body: {
    branch_tests?: object;
}, opts?: RequestOpts): Promise<{
    id?: string;
    site_id?: string;
    name?: string;
    path?: string;
    branches?: object[];
    active?: boolean;
    created_at?: string;
    updated_at?: string;
    unpublished_at?: string;
}>;
export declare function getSplitTest(siteId: string, splitTestId: string, opts?: RequestOpts): Promise<{
    id?: string;
    site_id?: string;
    name?: string;
    path?: string;
    branches?: object[];
    active?: boolean;
    created_at?: string;
    updated_at?: string;
    unpublished_at?: string;
}>;
export declare function enableSplitTest(siteId: string, splitTestId: string, opts?: RequestOpts): Promise<string>;
export declare function disableSplitTest(siteId: string, splitTestId: string, opts?: RequestOpts): Promise<string>;
export {};
