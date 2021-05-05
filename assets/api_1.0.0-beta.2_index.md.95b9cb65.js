import{o as s,c as a,a as n}from"./app.e52cc500.js";const t='{"title":"API","description":"","frontmatter":{"editLink":false},"headers":[{"level":2,"title":"Functions","slug":"functions"},{"level":3,"title":"add","slug":"add"},{"level":3,"title":"divide","slug":"divide"},{"level":3,"title":"isBigint","slug":"isbigint"},{"level":3,"title":"isNill","slug":"isnill"},{"level":3,"title":"isNull","slug":"isnull"},{"level":3,"title":"isNumber","slug":"isnumber"},{"level":3,"title":"isString","slug":"isstring"},{"level":3,"title":"isSymbol","slug":"issymbol"},{"level":3,"title":"multiply","slug":"multiply"},{"level":3,"title":"subtract","slug":"subtract"},{"level":2,"title":"Types","slug":"types"},{"level":3,"title":"AnyFn","slug":"anyfn"},{"level":3,"title":"IsBigint","slug":"isbigint-2"},{"level":3,"title":"IsNill","slug":"isnill-2"},{"level":3,"title":"IsNull","slug":"isnull-2"},{"level":3,"title":"IsNumber","slug":"isnumber-2"},{"level":3,"title":"IsString","slug":"isstring-2"},{"level":3,"title":"IsSymbol","slug":"issymbol-2"}],"relativePath":"api/1.0.0-beta.2/index.md","lastUpdated":1620218015217}',e={},p=n('<h1 id="api"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h1><h2 id="functions"><a class="header-anchor" href="#functions" aria-hidden="true">#</a> Functions</h2><h3 id="add"><a class="header-anchor" href="#add" aria-hidden="true">#</a> add</h3><p class="my-1"><small>Added from <a href="./../1.0.0/">1.0.0</a></small></p><p class="desc">Adds first argument and second argument.</p><p><strong>Signature:</strong></p><div class="language-ts"><pre><code>add<span class="token operator">:</span> <span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token builtin">number</span></span> <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> b<span class="token operator">?</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token keyword">undefined</span></span> <span class="token operator">?</span> <span class="token punctuation">(</span>b<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">number</span> <span class="token operator">:</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token builtin">number</span></span> <span class="token operator">?</span> <span class="token builtin">number</span> <span class="token operator">:</span> <span class="token builtin">never</span>\n</code></pre></div><details class="parameters-detail"><summary>Parameters</summary><table><thead><tr><th>Parameter</th><th>Description</th></tr></thead><tbody><tr><td><code>a</code></td><td>The first input number</td></tr><tr><td><code>b</code></td><td>The second input number</td></tr></tbody></table><p><code class="returns">=&gt;</code> The result of <code>a + b</code></p></details><h3 id="divide"><a class="header-anchor" href="#divide" aria-hidden="true">#</a> divide</h3><p class="my-1"><small>Added from <a href="./../1.0.0/">1.0.0</a></small></p><p class="desc">Divide input two arguments.</p><p><strong>Signature:</strong></p><div class="language-ts"><pre><code>divide<span class="token operator">:</span> <span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token builtin">number</span></span> <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> b<span class="token operator">?</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token keyword">undefined</span></span> <span class="token operator">?</span> <span class="token punctuation">(</span>b<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">number</span> <span class="token operator">:</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token builtin">number</span></span> <span class="token operator">?</span> <span class="token builtin">number</span> <span class="token operator">:</span> <span class="token builtin">never</span>\n</code></pre></div><details class="parameters-detail"><summary>Parameters</summary><table><thead><tr><th>Parameter</th><th>Description</th></tr></thead><tbody><tr><td><code>a</code></td><td>The first input number</td></tr><tr><td><code>b</code></td><td>The second input number</td></tr></tbody></table><p><code class="returns">=&gt;</code> The result of <code>a / b</code></p></details><div class="tip custom-block"><p class="custom-block-title">Remark</p><p>Note that when use curry, divide second argument from first argument.</p></div><h3 id="isbigint"><a class="header-anchor" href="#isbigint" aria-hidden="true">#</a> isBigint</h3><p class="my-1"><small>Added from <a href="./../1.0.0/">1.0.0</a></small></p><p class="desc">Whatever argument is type of bigint or not.</p><p><strong>Signature:</strong></p><div class="language-ts"><pre><code>isBigint<span class="token operator">:</span> <span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token builtin">unknown</span></span><span class="token operator">&gt;</span><span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> IsBigint<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span>\n</code></pre></div><details class="parameters-detail"><summary>Parameters</summary><table><thead><tr><th>Parameter</th><th>Description</th></tr></thead><tbody><tr><td><code>val</code></td><td>input any value</td></tr></tbody></table><p><code class="returns">=&gt;</code> The result of <code>typeof val === &#39;bigint&#39;</code></p></details><h3 id="isnill"><a class="header-anchor" href="#isnill" aria-hidden="true">#</a> isNill</h3><p class="my-1"><small>Added from <a href="./../1.0.0/">1.0.0</a></small></p><p class="desc">Whatever argument is type of undefined or null.</p><p><strong>Signature:</strong></p><div class="language-ts"><pre><code>isNill<span class="token operator">:</span> <span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token builtin">unknown</span></span><span class="token operator">&gt;</span><span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> IsNill<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span>\n</code></pre></div><details class="parameters-detail"><summary>Parameters</summary><table><thead><tr><th>Parameter</th><th>Description</th></tr></thead><tbody><tr><td><code>val</code></td><td>input any value</td></tr></tbody></table><p><code class="returns">=&gt;</code> The result of type of <code>val</code> is undefined or null</p></details><h3 id="isnull"><a class="header-anchor" href="#isnull" aria-hidden="true">#</a> isNull</h3><p class="my-1"><small>Added from <a href="./../1.0.0/">1.0.0</a></small></p><p class="desc">Whatever argument is type of null or not.</p><p><strong>Signature:</strong></p><div class="language-ts"><pre><code>isNull<span class="token operator">:</span> <span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token builtin">unknown</span></span><span class="token operator">&gt;</span><span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> IsNull<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span>\n</code></pre></div><details class="parameters-detail"><summary>Parameters</summary><table><thead><tr><th>Parameter</th><th>Description</th></tr></thead><tbody><tr><td><code>val</code></td><td>input any value</td></tr></tbody></table><p><code class="returns">=&gt;</code> The result of <code>val === null</code></p></details><h3 id="isnumber"><a class="header-anchor" href="#isnumber" aria-hidden="true">#</a> isNumber</h3><p class="my-1"><small>Added from <a href="./../1.0.0/">1.0.0</a></small></p><p class="desc">Whatever argument is type of number or not.</p><p><strong>Signature:</strong></p><div class="language-ts"><pre><code>isNumber<span class="token operator">:</span> <span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token builtin">unknown</span></span><span class="token operator">&gt;</span><span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> IsNumber<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span>\n</code></pre></div><details class="parameters-detail"><summary>Parameters</summary><table><thead><tr><th>Parameter</th><th>Description</th></tr></thead><tbody><tr><td><code>val</code></td><td>input any value</td></tr></tbody></table><p><code class="returns">=&gt;</code> The result of <code>typeof val === &#39;number&#39;</code></p></details><h3 id="isstring"><a class="header-anchor" href="#isstring" aria-hidden="true">#</a> isString</h3><p class="my-1"><small>Added from <a href="./../1.0.0/">1.0.0</a></small></p><p class="desc">Whatever argument is type of string or not.</p><p><strong>Signature:</strong></p><div class="language-ts"><pre><code>isString<span class="token operator">:</span> <span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token builtin">unknown</span></span><span class="token operator">&gt;</span><span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> IsString<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span>\n</code></pre></div><details class="parameters-detail"><summary>Parameters</summary><table><thead><tr><th>Parameter</th><th>Description</th></tr></thead><tbody><tr><td><code>val</code></td><td>input any value</td></tr></tbody></table><p><code class="returns">=&gt;</code> The result of <code>typeof val === &#39;string&#39;</code></p></details><h3 id="issymbol"><a class="header-anchor" href="#issymbol" aria-hidden="true">#</a> isSymbol</h3><p class="my-1"><small>Added from <a href="./../1.0.0/">1.0.0</a></small></p><p class="desc">Whatever argument is type of symbol or not.</p><p><strong>Signature:</strong></p><div class="language-ts"><pre><code>isSymbol<span class="token operator">:</span> <span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token builtin">unknown</span></span><span class="token operator">&gt;</span><span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> IsSymbol<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span>\n</code></pre></div><details class="parameters-detail"><summary>Parameters</summary><table><thead><tr><th>Parameter</th><th>Description</th></tr></thead><tbody><tr><td><code>val</code></td><td>input any value</td></tr></tbody></table><p><code class="returns">=&gt;</code> The result of <code>typeof val === &#39;symbol&#39;</code></p></details><h3 id="multiply"><a class="header-anchor" href="#multiply" aria-hidden="true">#</a> multiply</h3><p class="my-1"><small>Added from <a href="./../1.0.0/">1.0.0</a></small></p><p class="desc">Multiplies first argument and second argument.</p><p><strong>Signature:</strong></p><div class="language-ts"><pre><code>multiply<span class="token operator">:</span> <span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token builtin">number</span></span> <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> b<span class="token operator">?</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token keyword">undefined</span></span> <span class="token operator">?</span> <span class="token punctuation">(</span>b<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">number</span> <span class="token operator">:</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token builtin">number</span></span> <span class="token operator">?</span> <span class="token builtin">number</span> <span class="token operator">:</span> <span class="token builtin">never</span>\n</code></pre></div><details class="parameters-detail"><summary>Parameters</summary><table><thead><tr><th>Parameter</th><th>Description</th></tr></thead><tbody><tr><td><code>a</code></td><td>The first input number</td></tr><tr><td><code>b</code></td><td>The second input number</td></tr></tbody></table><p><code class="returns">=&gt;</code> The result of <code>a * b</code></p></details><h3 id="subtract"><a class="header-anchor" href="#subtract" aria-hidden="true">#</a> subtract</h3><p class="my-1"><small>Added from <a href="./../1.0.0/">1.0.0</a></small></p><p class="desc">Subtracts second argument from first argument.</p><p><strong>Signature:</strong></p><div class="language-ts"><pre><code>subtract<span class="token operator">:</span> <span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token builtin">number</span></span> <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> b<span class="token operator">?</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token keyword">undefined</span></span> <span class="token operator">?</span> <span class="token punctuation">(</span>b<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">number</span> <span class="token operator">:</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token builtin">number</span></span> <span class="token operator">?</span> <span class="token builtin">number</span> <span class="token operator">:</span> <span class="token builtin">never</span>\n</code></pre></div><details class="parameters-detail"><summary>Parameters</summary><table><thead><tr><th>Parameter</th><th>Description</th></tr></thead><tbody><tr><td><code>a</code></td><td>The first input number</td></tr><tr><td><code>b</code></td><td>The second input number</td></tr></tbody></table><p><code class="returns">=&gt;</code> The result of <code>a - b</code></p></details><h2 id="types"><a class="header-anchor" href="#types" aria-hidden="true">#</a> Types</h2><h3 id="anyfn"><a class="header-anchor" href="#anyfn" aria-hidden="true">#</a> AnyFn</h3><p class="my-1"><small>Added from <a href="./../1.0.0/">1.0.0</a></small></p><p class="desc">Type of any function</p><p><strong>Signature:</strong></p><div class="language-ts"><pre><code><span class="token keyword">type</span> <span class="token class-name">AnyFn<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">any</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">unknown</span><span class="token punctuation">;</span>\n</code></pre></div><h3 id="isbigint-2"><a class="header-anchor" href="#isbigint-2" aria-hidden="true">#</a> IsBigint</h3><p class="desc">Bigint or not</p><p><strong>Signature:</strong></p><div class="language-ts"><pre><code><span class="token keyword">type</span> <span class="token class-name">IsBigint<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name">bigint</span> <span class="token operator">?</span> <span class="token boolean">true</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n</code></pre></div><h3 id="isnill-2"><a class="header-anchor" href="#isnill-2" aria-hidden="true">#</a> IsNill</h3><p class="desc">Undefiled or null, or not</p><p><strong>Signature:</strong></p><div class="language-ts"><pre><code><span class="token keyword">type</span> <span class="token class-name">IsNill<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> IsUndefined<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token boolean">true</span></span> <span class="token operator">?</span> <span class="token boolean">true</span> <span class="token operator">:</span> IsNull<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token boolean">true</span></span> <span class="token operator">?</span> <span class="token boolean">true</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n</code></pre></div><h3 id="isnull-2"><a class="header-anchor" href="#isnull-2" aria-hidden="true">#</a> IsNull</h3><p class="desc">Null or not</p><p><strong>Signature:</strong></p><div class="language-ts"><pre><code><span class="token keyword">type</span> <span class="token class-name">IsNull<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token keyword">null</span></span> <span class="token operator">?</span> <span class="token boolean">true</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n</code></pre></div><h3 id="isnumber-2"><a class="header-anchor" href="#isnumber-2" aria-hidden="true">#</a> IsNumber</h3><p class="desc">Number or not</p><p><strong>Signature:</strong></p><div class="language-ts"><pre><code><span class="token keyword">type</span> <span class="token class-name">IsNumber<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token builtin">number</span></span> <span class="token operator">?</span> <span class="token boolean">true</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n</code></pre></div><h3 id="isstring-2"><a class="header-anchor" href="#isstring-2" aria-hidden="true">#</a> IsString</h3><p class="desc">String or not</p><p><strong>Signature:</strong></p><div class="language-ts"><pre><code><span class="token keyword">type</span> <span class="token class-name">IsString<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token builtin">string</span></span> <span class="token operator">?</span> <span class="token boolean">true</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n</code></pre></div><h3 id="issymbol-2"><a class="header-anchor" href="#issymbol-2" aria-hidden="true">#</a> IsSymbol</h3><p class="desc">Symbol or not</p><p><strong>Signature:</strong></p><div class="language-ts"><pre><code><span class="token keyword">type</span> <span class="token class-name">IsSymbol<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token builtin">symbol</span></span> <span class="token operator">?</span> <span class="token boolean">true</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n</code></pre></div>',93);e.render=function(n,t,e,o,l,r){return s(),a("div",null,[p])};export default e;export{t as __pageData};
