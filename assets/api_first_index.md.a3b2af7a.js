import{o as n,c as s,a,b as t}from"./app.ebf0e892.js";const e='{"title":"first variable","description":"","frontmatter":{},"headers":[{"level":2,"title":"first variable","slug":"first-variable"},{"level":2,"title":"Example 1","slug":"example-1"},{"level":2,"title":"Example 2","slug":"example-2"}],"relativePath":"api/first/index.md","lastUpdated":1619870634929}',p={},o=t('<h2 id="first-variable"><a class="header-anchor" href="#first-variable" aria-hidden="true">#</a> first variable</h2><p>Returns the first element of the given list or string.</p><p><b>Signature:</b></p><div class="language-typescript"><pre><code>first<span class="token operator">:</span> <span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token builtin">string</span></span> <span class="token operator">|</span> <span class="token keyword">readonly</span> <span class="token builtin">unknown</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> First<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span>\n</code></pre></div><h2 id="example-1"><a class="header-anchor" href="#example-1" aria-hidden="true">#</a> Example 1</h2><div class="language-ts"><pre><code><span class="token comment">// String</span>\n<span class="token function">first</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span> <span class="token comment">// &#39;h&#39;</span>\n\n</code></pre></div><h2 id="example-2"><a class="header-anchor" href="#example-2" aria-hidden="true">#</a> Example 2</h2><div class="language-ts"><pre><code><span class="token comment">// Array</span>\n<span class="token function">first</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;new&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;world&#39;</span><span class="token punctuation">)</span> <span class="token comment">// &#39;hello&#39;</span>\n<span class="token function">first</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// undefined</span>\n<span class="token function">first</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;one&#39;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// &#39;one&#39;</span>\n\n</code></pre></div>',8);p.render=function(t,e,p,l,c,i){return n(),s("div",null,[a(" Do not edit this file. It is automatically generated by API Documenter. "),o])};export default p;export{e as __pageData};
