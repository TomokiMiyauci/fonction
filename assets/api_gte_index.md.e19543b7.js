import{o as n,c as s,a,b as t}from"./app.77d74c8b.js";const e='{"title":"gte variable","description":"","frontmatter":{},"headers":[{"level":2,"title":"gte variable","slug":"gte-variable"},{"level":2,"title":"Example 1","slug":"example-1"},{"level":2,"title":"Example 2","slug":"example-2"},{"level":2,"title":"Example 3","slug":"example-3"},{"level":2,"title":"Example 4","slug":"example-4"},{"level":2,"title":"Example 5","slug":"example-5"}],"relativePath":"api/gte/index.md","lastUpdated":1618797912879}',p={},o=t('<h2 id="gte-variable"><a class="header-anchor" href="#gte-variable" aria-hidden="true">#</a> gte variable</h2><p>Returns <code>true</code> if the first argument is greater than or equal to the second; otherwise <code>false</code></p><p><b>Signature:</b></p><div class="language-typescript"><pre><code>gte<span class="token operator">:</span> <span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name">Ord</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">boolean</span>\n</code></pre></div><h2 id="example-1"><a class="header-anchor" href="#example-1" aria-hidden="true">#</a> Example 1</h2><div class="language-ts"><pre><code><span class="token comment">// Number</span>\n<span class="token function">gte</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// true</span>\n<span class="token function">gte</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// true</span>\n<span class="token function">gte</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token comment">// false</span>\n\n</code></pre></div><h2 id="example-2"><a class="header-anchor" href="#example-2" aria-hidden="true">#</a> Example 2</h2><div class="language-ts"><pre><code><span class="token comment">// Bigint</span>\n<span class="token function">gte</span><span class="token punctuation">(</span><span class="token number">2n</span><span class="token punctuation">,</span> <span class="token number">1n</span><span class="token punctuation">)</span> <span class="token comment">// true</span>\n<span class="token function">gte</span><span class="token punctuation">(</span><span class="token number">2n</span><span class="token punctuation">,</span> <span class="token number">2n</span><span class="token punctuation">)</span> <span class="token comment">// true</span>\n<span class="token function">gte</span><span class="token punctuation">(</span><span class="token number">2n</span><span class="token punctuation">,</span> <span class="token number">3n</span><span class="token punctuation">)</span> <span class="token comment">// false</span>\n\n</code></pre></div><h2 id="example-3"><a class="header-anchor" href="#example-3" aria-hidden="true">#</a> Example 3</h2><div class="language-ts"><pre><code><span class="token comment">// String</span>\n<span class="token function">gte</span><span class="token punctuation">(</span><span class="token string">&#39;z&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span> <span class="token comment">// true</span>\n<span class="token function">gte</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span> <span class="token comment">// true</span>\n<span class="token function">gte</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;z&#39;</span><span class="token punctuation">)</span> <span class="token comment">// false</span>\n\n</code></pre></div><h2 id="example-4"><a class="header-anchor" href="#example-4" aria-hidden="true">#</a> Example 4</h2><div class="language-ts"><pre><code><span class="token comment">// Boolean</span>\n<span class="token function">gte</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token comment">// true</span>\n<span class="token function">gte</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">// true</span>\n<span class="token function">gte</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token comment">// true</span>\n<span class="token function">gte</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">// false</span>\n\n</code></pre></div><h2 id="example-5"><a class="header-anchor" href="#example-5" aria-hidden="true">#</a> Example 5</h2><div class="language-ts"><pre><code><span class="token comment">// Date</span>\n<span class="token function">gte</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">&#39;2000/1/2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">&#39;2000/1/1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// true</span>\n<span class="token function">gte</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">&#39;2000/1/1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">&#39;2000/1/1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// true</span>\n<span class="token function">gte</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">&#39;1999/12/31&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">&#39;2000/1/1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// false</span>\n\n</code></pre></div>',14);p.render=function(t,e,p,c,l,u){return n(),s("div",null,[a(" Do not edit this file. It is automatically generated by API Documenter. "),o])};export default p;export{e as __pageData};
