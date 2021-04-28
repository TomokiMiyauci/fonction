import{o as a,c as s,a as n,b as e}from"./app.38c2241b.js";const t='{"title":"values variable","description":"","frontmatter":{},"headers":[{"level":2,"title":"values variable","slug":"values-variable"},{"level":2,"title":"Remarks","slug":"remarks"},{"level":2,"title":"Example 1","slug":"example-1"},{"level":2,"title":"Example 2","slug":"example-2"}],"relativePath":"api/values/index.md","lastUpdated":1619621692706}',p={},o=e('<h2 id="values-variable"><a class="header-anchor" href="#values-variable" aria-hidden="true">#</a> values variable</h2><p>Returns an array of values of the enumerable properties of an object.</p><p><b>Signature:</b></p><div class="language-typescript"><pre><code>values<span class="token operator">:</span> <span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token builtin">unknown</span></span><span class="token operator">&gt;</span><span class="token punctuation">(</span>val<span class="token operator">:</span> Record<span class="token operator">&lt;</span>PropertyKey<span class="token punctuation">,</span> <span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token operator">|</span> ArrayLike<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span>\n</code></pre></div><h2 id="remarks"><a class="header-anchor" href="#remarks" aria-hidden="true">#</a> Remarks</h2><p>The order of the output array is not guaranteed to be consistent across different platforms.</p><h2 id="example-1"><a class="header-anchor" href="#example-1" aria-hidden="true">#</a> Example 1</h2><div class="language-ts"><pre><code><span class="token comment">// Object</span>\n<span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// []</span>\n<span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token string">&#39;a&#39;</span><span class="token operator">:</span> <span class="token string">&#39;b&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// [&#39;b&#39;]</span>\n<span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token number">0</span><span class="token operator">:</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token operator">:</span> <span class="token string">&#39;world&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// [&#39;hello&#39;, &#39;world&#39;]</span>\n\n</code></pre></div><h2 id="example-2"><a class="header-anchor" href="#example-2" aria-hidden="true">#</a> Example 2</h2><div class="language-ts"><pre><code><span class="token comment">// Array</span>\n<span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// []</span>\n<span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;world&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// [&#39;hello&#39;, &#39;world&#39;]</span>\n\n</code></pre></div>',10);p.render=function(e,t,p,l,c,r){return a(),s("div",null,[n(" Do not edit this file. It is automatically generated by API Documenter. "),o])};export default p;export{t as __pageData};
