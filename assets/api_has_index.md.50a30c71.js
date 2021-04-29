import{o as n,c as s,a,b as p}from"./app.ebf0e892.js";const t='{"title":"has variable","description":"","frontmatter":{},"headers":[{"level":2,"title":"has variable","slug":"has-variable"},{"level":2,"title":"Example 1","slug":"example-1"},{"level":2,"title":"Example 2","slug":"example-2"}],"relativePath":"api/has/index.md","lastUpdated":1619685542569}',o={},e=p('<h2 id="has-variable"><a class="header-anchor" href="#has-variable" aria-hidden="true">#</a> has variable</h2><p>Returns whether or not an object has an own property with the specified name.</p><p><b>Signature:</b></p><div class="language-typescript"><pre><code>has<span class="token operator">:</span> <span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token builtin">string</span></span> <span class="token operator">|</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token constant">U</span> <span class="token keyword">extends</span> <span class="token class-name">Record<span class="token operator">&lt;</span>PropertyKey<span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span></span><span class="token operator">&gt;</span><span class="token punctuation">(</span>props<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> obj<span class="token operator">:</span> <span class="token constant">U</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token builtin">unknown</span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">?</span> <span class="token builtin">boolean</span> <span class="token operator">:</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token builtin">string</span></span> <span class="token operator">|</span> <span class="token builtin">number</span> <span class="token operator">?</span> <span class="token constant">U</span> <span class="token keyword">extends</span> <span class="token class-name">Record<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span></span> <span class="token operator">?</span> <span class="token boolean">true</span> <span class="token operator">:</span> <span class="token boolean">false</span> <span class="token operator">:</span> <span class="token builtin">never</span>\n</code></pre></div><h2 id="example-1"><a class="header-anchor" href="#example-1" aria-hidden="true">#</a> Example 1</h2><div class="language-ts"><pre><code><span class="token comment">// Flat</span>\n<span class="token function">has</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> hello<span class="token operator">:</span> <span class="token string">&#39;world&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// true</span>\n<span class="token function">has</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token number">0</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// true</span>\n<span class="token function">has</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// false</span>\n<span class="token function">has</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> hi <span class="token operator">:</span> hello<span class="token operator">:</span> <span class="token string">&#39;world&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// false</span>\n\n</code></pre></div><h2 id="example-2"><a class="header-anchor" href="#example-2" aria-hidden="true">#</a> Example 2</h2><div class="language-ts"><pre><code><span class="token comment">// Nest</span>\n<span class="token function">hasPath</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> hello<span class="token operator">:</span> <span class="token string">&#39;world&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// true</span>\n<span class="token function">hasPath</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token number">0</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// true</span>\n<span class="token function">hasPath</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;world&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> hello<span class="token operator">:</span> <span class="token punctuation">{</span> world<span class="token operator">:</span> <span class="token string">&#39;&#39;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span> <span class="token comment">// true</span>\n\n<span class="token function">hasPath</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;hi&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> hello<span class="token operator">:</span> <span class="token string">&#39;&#39;</span> <span class="token punctuation">}</span> <span class="token punctuation">)</span> <span class="token comment">// false</span>\n<span class="token function">hasPath</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;hi&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Tom&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> hi<span class="token operator">:</span> <span class="token punctuation">{</span> John<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span> <span class="token punctuation">)</span> <span class="token comment">// false</span>\n\n</code></pre></div>',8);o.render=function(p,t,o,c,l,u){return n(),s("div",null,[a(" Do not edit this file. It is automatically generated by API Documenter. "),e])};export default o;export{t as __pageData};
