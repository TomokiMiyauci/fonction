import{o as s,c as n,a,b as e}from"./app.08991bd1.js";const t='{"title":"subtract variable","description":"","frontmatter":{},"headers":[{"level":2,"title":"subtract variable","slug":"subtract-variable"},{"level":2,"title":"Example 1","slug":"example-1"},{"level":2,"title":"Example 2","slug":"example-2"},{"level":2,"title":"Example 3","slug":"example-3"}],"relativePath":"api/subtract/index.md","lastUpdated":1618660585640}',p={},o=e('<h2 id="subtract-variable"><a class="header-anchor" href="#subtract-variable" aria-hidden="true">#</a> subtract variable</h2><blockquote><p>This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.</p></blockquote><p>Subtracts second argument from first argument.</p><p><b>Signature:</b></p><div class="language-typescript"><pre><code>subtract<span class="token operator">:</span> <span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token builtin">number</span></span> <span class="token operator">|</span> bigint<span class="token punctuation">,</span> <span class="token constant">U</span> <span class="token keyword">extends</span> <span class="token punctuation">(</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token builtin">number</span></span> <span class="token operator">?</span> <span class="token builtin">number</span> <span class="token operator">:</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name">bigint</span> <span class="token operator">?</span> bigint <span class="token operator">:</span> <span class="token builtin">never</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> b<span class="token operator">?</span><span class="token operator">:</span> <span class="token constant">U</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">U</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token keyword">undefined</span></span> <span class="token operator">?</span> <span class="token punctuation">(</span>b<span class="token operator">:</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token builtin">number</span></span> <span class="token operator">?</span> <span class="token builtin">number</span> <span class="token operator">:</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name">bigint</span> <span class="token operator">?</span> bigint <span class="token operator">:</span> <span class="token builtin">never</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token builtin">number</span></span> <span class="token operator">?</span> <span class="token builtin">number</span> <span class="token operator">:</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name">bigint</span> <span class="token operator">?</span> bigint <span class="token operator">:</span> <span class="token builtin">never</span> <span class="token operator">:</span> <span class="token constant">U</span> <span class="token keyword">extends</span> <span class="token punctuation">(</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token builtin">number</span></span> <span class="token operator">?</span> <span class="token builtin">number</span> <span class="token operator">:</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name">bigint</span> <span class="token operator">?</span> bigint <span class="token operator">:</span> <span class="token builtin">never</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token builtin">number</span></span> <span class="token operator">?</span> <span class="token builtin">number</span> <span class="token operator">:</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name">bigint</span> <span class="token operator">?</span> bigint <span class="token operator">:</span> <span class="token builtin">never</span> <span class="token operator">:</span> <span class="token builtin">never</span>\n</code></pre></div><h2 id="example-1"><a class="header-anchor" href="#example-1" aria-hidden="true">#</a> Example 1</h2><div class="language-ts"><pre><code><span class="token comment">// Basic</span>\n<span class="token function">subtract</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// 1</span>\n\n</code></pre></div><h2 id="example-2"><a class="header-anchor" href="#example-2" aria-hidden="true">#</a> Example 2</h2><div class="language-ts"><pre><code><span class="token comment">// Bigint</span>\n<span class="token function">subtract</span><span class="token punctuation">(</span><span class="token number">2n</span><span class="token punctuation">,</span> <span class="token number">1n</span><span class="token punctuation">)</span> <span class="token comment">// 1n</span>\n\n</code></pre></div><h2 id="example-3"><a class="header-anchor" href="#example-3" aria-hidden="true">#</a> Example 3</h2><div class="language-ts"><pre><code><span class="token comment">// Curry</span>\n<span class="token keyword">const</span> minus5 <span class="token operator">=</span> <span class="token function">subtract</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>\n<span class="token function">minus5</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token comment">// 5</span>\n\n</code></pre></div>',11);p.render=function(e,t,p,c,l,r){return s(),n("div",null,[a(" Do not edit this file. It is automatically generated by API Documenter. "),o])};export default p;export{t as __pageData};
