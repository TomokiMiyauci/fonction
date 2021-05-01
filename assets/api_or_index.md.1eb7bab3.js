import{o as a,c as s,a as n,b as e}from"./app.ebf0e892.js";const t='{"title":"or variable","description":"","frontmatter":{},"headers":[{"level":2,"title":"or variable","slug":"or-variable"},{"level":2,"title":"Example","slug":"example"}],"relativePath":"api/or/index.md","lastUpdated":1619873947485}',o={},p=e('<h2 id="or-variable"><a class="header-anchor" href="#or-variable" aria-hidden="true">#</a> or variable</h2><p>Returns true if one or both of its arguments are true; otherwise false.</p><p><b>Signature:</b></p><div class="language-typescript"><pre><code>or<span class="token operator">:</span> <span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">U</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token constant">U</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name">Falsy</span> <span class="token operator">?</span> <span class="token constant">U</span> <span class="token keyword">extends</span> <span class="token class-name">Falsy</span> <span class="token operator">?</span> <span class="token boolean">false</span> <span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">:</span> <span class="token builtin">boolean</span>\n</code></pre></div><h2 id="example"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2><div class="language-ts"><pre><code><span class="token function">or</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">// true</span>\n<span class="token function">or</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">// true</span>\n<span class="token function">or</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token comment">// true</span>\n<span class="token function">or</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token comment">// false</span>\n\n</code></pre></div>',6);o.render=function(e,t,o,l,c,r){return a(),s("div",null,[n(" Do not edit this file. It is automatically generated by API Documenter. "),p])};export default o;export{t as __pageData};
