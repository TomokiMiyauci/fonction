import{o as s,c as n,a,b as t}from"./app.984dbcf3.js";const e='{"title":"endsWith variable","description":"","frontmatter":{},"headers":[{"level":2,"title":"endsWith variable","slug":"endswith-variable"},{"level":2,"title":"Example 1","slug":"example-1"},{"level":2,"title":"Example 2","slug":"example-2"}],"relativePath":"api/endswith/index.md","lastUpdated":1618885868623}',p={},o=t('<h2 id="endswith-variable"><a class="header-anchor" href="#endswith-variable" aria-hidden="true">#</a> endsWith variable</h2><p>Checks if a string ends with the provided substring.</p><p><b>Signature:</b></p><div class="language-typescript"><pre><code>endsWith<span class="token operator">:</span> <span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token builtin">string</span></span><span class="token punctuation">,</span> <span class="token constant">U</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token builtin">string</span></span> <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> target<span class="token operator">?</span><span class="token operator">:</span> <span class="token constant">U</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> StringWith<span class="token operator">&lt;</span><span class="token string">&quot;endsWith&quot;</span><span class="token punctuation">,</span> <span class="token constant">U</span><span class="token operator">&gt;</span>\n</code></pre></div><h2 id="example-1"><a class="header-anchor" href="#example-1" aria-hidden="true">#</a> Example 1</h2><div class="language-ts"><pre><code><span class="token comment">// Basic</span>\n<span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">&#39;world&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;hello world&#39;</span><span class="token punctuation">)</span> <span class="token comment">// true</span>\n<span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">&#39;earth&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;hello world&#39;</span><span class="token punctuation">)</span> <span class="token comment">// false</span>\n\n</code></pre></div><h2 id="example-2"><a class="header-anchor" href="#example-2" aria-hidden="true">#</a> Example 2</h2><div class="language-ts"><pre><code><span class="token comment">// Curry</span>\n<span class="token keyword">const</span> endsWithTs <span class="token operator">=</span> <span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">&#39;ts&#39;</span><span class="token punctuation">)</span>\n<span class="token function">endsWithTs</span><span class="token punctuation">(</span><span class="token string">&#39;index.ts&#39;</span><span class="token punctuation">)</span> <span class="token comment">// true</span>\n\n</code></pre></div>',8);p.render=function(t,e,p,l,c,i){return s(),n("div",null,[a(" Do not edit this file. It is automatically generated by API Documenter. "),o])};export default p;export{e as __pageData};