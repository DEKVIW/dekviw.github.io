var posts=["posts/d34f0a47cc4f/","posts/69f110715577/","posts/4f07eebef4c4/","posts/9c37da498c36/","posts/48f8079185ff/","posts/1aa13d495272/","posts/74f18148933d/","posts/45a9f9898c39/","posts/a3e53b521018/","posts/70ef13fd1f07/","posts/38c8df649aaf/","posts/4c943f5e544a/","posts/425b8841472f/","posts/5871d8ea1e2e/","posts/f0e3d1b3dba1/","posts/454c4eb4b9eb/","posts/8ed099796e8a/","posts/444c5751d1bb/","posts/0c1661237f76/","posts/2f502428fecc/","posts/d7531faeb39e/","posts/b73aaf514755/","posts/e5be7a23198e/","posts/d2ad6f8c8f0e/","posts/11fe563bae32/","posts/431b2e533fd9/","posts/bcd0c52ed080/","posts/06551b4b6653/","posts/0ca696416419/","posts/c82868a11672/","posts/2d483715b4ac/","posts/66a359124105/","posts/d2a34f779085/","posts/72c933b57125/","posts/f00a10c67728/","posts/c778d9499d5e/","posts/edcad61667e4/","posts/0a1f973905b1/","posts/7c07704de373/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};