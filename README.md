# a-json-api-by-object-store
## Desc：
数据信息类app,数据修改都在后台管理端进行，数据量相对较大，更新不频繁，但要求信息要及时同步到客户端。
（其实主要是因为我们没钱买服务器，1M小水管不够用。）偶然想到，为什么不能使用七牛云对象存储来提供API服务呢。
于是去查了下，果然，七牛云就有一套SDK服务。
然后，我用node.js搭建了一个简单的服务，后台管理数据更新时可以通知node去更新七牛云存储中的数据。
这样，用户请求数据都是从七牛云那来。

