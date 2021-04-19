import{o as n,c as a,a as s,b as t}from"./app.77d74c8b.js";const p='{"title":"sum variable","description":"","frontmatter":{},"headers":[{"level":2,"title":"sum variable","slug":"sum-variable"},{"level":2,"title":"Example","slug":"example"}],"relativePath":"api/sum/index.md","lastUpdated":1618838752550}',e={},o=t('<h2 id="sum-variable"><a class="header-anchor" href="#sum-variable" aria-hidden="true">#</a> sum variable</h2><p>Adds together all the elements of a list.</p><p><b>Signature:</b></p><div class="language-typescript"><pre><code>sum<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>\n    <span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n    <span class="token punctuation">(</span>val<span class="token operator">:</span> bigint<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> bigint<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="example"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2><div class="language-ts"><pre><code><span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 15</span>\n<span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1n</span><span class="token punctuation">,</span> <span class="token number">2n</span><span class="token punctuation">,</span> <span class="token number">3n</span><span class="token punctuation">,</span> <span class="token number">4n</span><span class="token punctuation">,</span> <span class="token number">5n</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 15n</span>\n<span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 0</span>\n\n</code></pre></div>',6);e.render=function(t,p,e,c,u,l){return n(),a("div",null,[s(" Do not edit this file. It is automatically generated by API Documenter. "),o])};export default e;export{p as __pageData};
