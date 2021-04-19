import{o as n,c as a,a as s,b as t}from"./app.77d74c8b.js";const p='{"title":"prepend variable","description":"","frontmatter":{},"headers":[{"level":2,"title":"prepend variable","slug":"prepend-variable"},{"level":2,"title":"Example","slug":"example"}],"relativePath":"api/prepend/index.md","lastUpdated":1618840107177}',e={},o=t('<h2 id="prepend-variable"><a class="header-anchor" href="#prepend-variable" aria-hidden="true">#</a> prepend variable</h2><blockquote><p>This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.</p></blockquote><p>Returns a new list with the given value at the front, followed by the contents of the list.</p><p><b>Signature:</b></p><div class="language-typescript"><pre><code>prepend<span class="token operator">:</span> <span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">U</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> list<span class="token operator">:</span> <span class="token constant">U</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token constant">T</span> <span class="token operator">|</span> <span class="token constant">U</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span>\n</code></pre></div><h2 id="example"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2><div class="language-ts"><pre><code><span class="token function">prepend</span><span class="token punctuation">(</span><span class="token string">&#39;Tom&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// [&#39;Tom&#39;, &#39;hello&#39;]</span>\n<span class="token function">prepend</span><span class="token punctuation">(</span><span class="token string">&#39;Tom&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// [&#39;Tom&#39;]</span>\n<span class="token function">prepend</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;Tom&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;world&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// [[&#39;Tom&#39;], &#39;hello&#39;, &#39;world&#39;]</span>\n\n</code></pre></div>',7);e.render=function(t,p,e,c,l,i){return n(),a("div",null,[s(" Do not edit this file. It is automatically generated by API Documenter. "),o])};export default e;export{p as __pageData};
