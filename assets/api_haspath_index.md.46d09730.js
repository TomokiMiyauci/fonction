import{o as n,c as a,a as s,b as t}from"./app.984dbcf3.js";const p='{"title":"hasPath variable","description":"","frontmatter":{},"headers":[{"level":2,"title":"hasPath variable","slug":"haspath-variable"},{"level":2,"title":"Example","slug":"example"}],"relativePath":"api/haspath/index.md","lastUpdated":1618885868623}',o={},e=t('<h2 id="haspath-variable"><a class="header-anchor" href="#haspath-variable" aria-hidden="true">#</a> hasPath variable</h2><p>Returns whether or not a path exists in an object. Only the object&#39;s own properties are checked.</p><p><b>Signature:</b></p><div class="language-typescript"><pre><code>hasPath<span class="token operator">:</span> <span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token builtin">unknown</span></span><span class="token operator">&gt;</span><span class="token punctuation">(</span>path<span class="token operator">:</span> <span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> obj<span class="token operator">:</span> Record<span class="token operator">&lt;</span>PropertyKey<span class="token punctuation">,</span> <span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">boolean</span>\n</code></pre></div><h2 id="example"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2><div class="language-ts"><pre><code><span class="token function">hasPath</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> hello<span class="token operator">:</span> <span class="token string">&#39;world&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// true</span>\n<span class="token function">hasPath</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token number">0</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// true</span>\n<span class="token function">hasPath</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;world&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> hello<span class="token operator">:</span> <span class="token punctuation">{</span> world<span class="token operator">:</span> <span class="token string">&#39;&#39;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span> <span class="token comment">// true</span>\n\n<span class="token function">hasPath</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;hi&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> hello<span class="token operator">:</span> <span class="token string">&#39;&#39;</span> <span class="token punctuation">}</span> <span class="token punctuation">)</span> <span class="token comment">// false</span>\n<span class="token function">hasPath</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;hi&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Tom&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> hi<span class="token operator">:</span> <span class="token punctuation">{</span> John<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span> <span class="token punctuation">)</span> <span class="token comment">// false</span>\n\n</code></pre></div>',6);o.render=function(t,p,o,c,l,u){return n(),a("div",null,[s(" Do not edit this file. It is automatically generated by API Documenter. "),e])};export default o;export{p as __pageData};