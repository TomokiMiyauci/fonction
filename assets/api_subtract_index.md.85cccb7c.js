import{o as n,c as a,a as s,b as t}from"./app.77d74c8b.js";const p='{"title":"subtract variable","description":"","frontmatter":{},"headers":[{"level":2,"title":"subtract variable","slug":"subtract-variable"},{"level":2,"title":"Remarks","slug":"remarks"},{"level":2,"title":"Example 1","slug":"example-1"},{"level":2,"title":"Example 2","slug":"example-2"},{"level":2,"title":"Example 3","slug":"example-3"},{"level":2,"title":"Example 4","slug":"example-4"}],"relativePath":"api/subtract/index.md","lastUpdated":1618725493344}',e={},o=t('<h2 id="subtract-variable"><a class="header-anchor" href="#subtract-variable" aria-hidden="true">#</a> subtract variable</h2><p>Subtracts its second argument from its first argument.</p><p><b>Signature:</b></p><div class="language-typescript"><pre><code>subtract<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n    <span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">(</span>b<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n    <span class="token punctuation">(</span>a<span class="token operator">:</span> bigint<span class="token punctuation">,</span> b<span class="token operator">:</span> bigint<span class="token punctuation">)</span><span class="token operator">:</span> bigint<span class="token punctuation">;</span>\n    <span class="token punctuation">(</span>a<span class="token operator">:</span> bigint<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">(</span>b<span class="token operator">:</span> bigint<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> bigint<span class="token punctuation">;</span>\n<span class="token punctuation">}</span> <span class="token operator">&amp;</span> <span class="token punctuation">{</span>\n    <span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token keyword">typeof</span> _<span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n    <span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token keyword">typeof</span> _<span class="token punctuation">,</span> b<span class="token operator">:</span> bigint<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">(</span>a<span class="token operator">:</span> bigint<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> bigint<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="remarks"><a class="header-anchor" href="#remarks" aria-hidden="true">#</a> Remarks</h2><p>Since subtraction is not idempotent, there are two ways to curry.</p><h2 id="example-1"><a class="header-anchor" href="#example-1" aria-hidden="true">#</a> Example 1</h2><div class="language-ts"><pre><code><span class="token comment">// Number</span>\n<span class="token function">subtract</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// 1</span>\n\n</code></pre></div><h2 id="example-2"><a class="header-anchor" href="#example-2" aria-hidden="true">#</a> Example 2</h2><div class="language-ts"><pre><code><span class="token comment">// Bigint</span>\n<span class="token function">subtract</span><span class="token punctuation">(</span><span class="token number">3n</span><span class="token punctuation">,</span> <span class="token number">2n</span><span class="token punctuation">)</span> <span class="token comment">//1n</span>\n\n</code></pre></div><h2 id="example-3"><a class="header-anchor" href="#example-3" aria-hidden="true">#</a> Example 3</h2><div class="language-ts"><pre><code><span class="token comment">// First argument curry</span>\n<span class="token keyword">const</span> from5Minus <span class="token operator">=</span> <span class="token function">subtract</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>\n<span class="token function">from5Minus</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token comment">// -5</span>\n\n</code></pre></div><h2 id="example-4"><a class="header-anchor" href="#example-4" aria-hidden="true">#</a> Example 4</h2><div class="language-ts"><pre><code><span class="token comment">// Second argument curry</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> _ <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;fonction&#39;</span>\n<span class="token keyword">const</span> minus5 <span class="token operator">=</span> <span class="token punctuation">(</span>_<span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>\n<span class="token function">minus5</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token comment">// 15</span>\n\n</code></pre></div>',14);e.render=function(t,p,e,c,l,r){return n(),a("div",null,[s(" Do not edit this file. It is automatically generated by API Documenter. "),o])};export default e;export{p as __pageData};
