import{o as a,c as s,a as n,b as e}from"./app.38c2241b.js";const t='{"title":"keys variable","description":"","frontmatter":{},"headers":[{"level":2,"title":"keys variable","slug":"keys-variable"},{"level":2,"title":"Remarks","slug":"remarks"},{"level":2,"title":"Example","slug":"example"}],"relativePath":"api/keys/index.md","lastUpdated":1619621692706}',p={},o=e('<h2 id="keys-variable"><a class="header-anchor" href="#keys-variable" aria-hidden="true">#</a> keys variable</h2><p>Returns the names of the enumerable string properties and methods of an object.</p><p><b>Signature:</b></p><div class="language-typescript"><pre><code>keys<span class="token operator">:</span> <span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name">PropertyKey</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>val<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span>\n</code></pre></div><h2 id="remarks"><a class="header-anchor" href="#remarks" aria-hidden="true">#</a> Remarks</h2><p>The order of the output array is not guaranteed to be consistent across different JS platforms.</p><h2 id="example"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2><div class="language-ts"><pre><code><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// []</span>\n<span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token string">&#39;a&#39;</span><span class="token operator">:</span> <span class="token string">&#39;b&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// [&#39;a&#39;]</span>\n<span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token number">0</span><span class="token operator">:</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token operator">:</span> <span class="token string">&#39;world&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// [&#39;0&#39;, &#39;1&#39;]</span>\n\n</code></pre></div>',8);p.render=function(e,t,p,c,l,r){return a(),s("div",null,[n(" Do not edit this file. It is automatically generated by API Documenter. "),o])};export default p;export{t as __pageData};
