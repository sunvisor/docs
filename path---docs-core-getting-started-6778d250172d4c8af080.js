webpackJsonp([0xb55dc29c56cb],{406:function(n,t){n.exports={data:{post:{html:'<h1 id="getting-started"><a href="#getting-started" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Getting started</h1>\n<h2 id="installing-api-platform-core"><a href="#installing-api-platform-core" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installing API Platform Core</h2>\n<p>If you are starting a new project, the easiest way to get API Platform up is to install the <a href="/docs/distribution/index">API Platform Distribution</a>.\nIt ships with the API Platform Core library integrated with <a href="https://symfony.com" target="_blank" rel="nofollow noopener noreferrer">the Symfony framework</a>, <a href="/docs/schema-generator/">the schema generator</a>,\n<a href="http://www.doctrine-project.org" target="_blank" rel="nofollow noopener noreferrer">Doctrine ORM</a>, <a href="https://github.com/nelmio/NelmioCorsBundle" target="_blank" rel="nofollow noopener noreferrer">NelmioCorsBundle</a>\nand <a href="http://behat.org" target="_blank" rel="nofollow noopener noreferrer">Behat</a>.\nBasically, it is a Symfony edition packaged with the best tools to develop a REST API and sensible default settings.</p>\n<p>Alternatively, you can use <a href="http://getcomposer.org" target="_blank" rel="nofollow noopener noreferrer">Composer</a> to install the standalone bundle in an existing Symfony Flex\nproject:</p>\n<p><code>composer require api</code></p>\n<p>There is no mandatory configuration options although <a href="/docs/core/configuration">many settings are available</a>.</p>\n<h2 id="before-reading-this-documentation"><a href="#before-reading-this-documentation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Before Reading this Documentation</h2>\n<p>If you haven\'t read it already, take a look at <a href="/docs/distribution/index">the Getting Started guide</a>.\nThis tutorial covers basic concepts required to understand how API Platform works including how it implements the REST pattern\nand what <a href="http://json-ld.org/" target="_blank" rel="nofollow noopener noreferrer">JSON-LD</a> and <a href="http://www.hydra-cg.com/" target="_blank" rel="nofollow noopener noreferrer">Hydra</a> formats are.</p>\n<h2 id="mapping-the-entities"><a href="#mapping-the-entities" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Mapping the Entities</h2>\n<p>API Platform Core is able to automatically expose entities mapped as "API resources" through a REST API supporting CRUD\noperations.\nTo expose your entities, you can use Docblock annotations, XML and YAML configuration files.</p>\n<p>Here is an example of entities mapped using annotations which will be exposed through a REST API:</p>\n<div class="gatsby-highlight">\n      <pre class="language-php"><code><span class="token delimiter important">&lt;?php</span>\n<span class="token comment">// api/src/Entity/Product.php</span>\n\n<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Entity</span><span class="token punctuation">;</span>\n\n<span class="token keyword">use</span> <span class="token package">ApiPlatform<span class="token punctuation">\\</span>Core<span class="token punctuation">\\</span>Annotation<span class="token punctuation">\\</span>ApiResource</span><span class="token punctuation">;</span>\n<span class="token keyword">use</span> <span class="token package">Doctrine<span class="token punctuation">\\</span>ORM<span class="token punctuation">\\</span>Mapping</span> <span class="token keyword">as</span> <span class="token constant">ORM</span><span class="token punctuation">;</span>\n<span class="token keyword">use</span> <span class="token package">Doctrine<span class="token punctuation">\\</span>Common<span class="token punctuation">\\</span>Collections<span class="token punctuation">\\</span>ArrayCollection</span><span class="token punctuation">;</span>\n<span class="token keyword">use</span> <span class="token package">Symfony<span class="token punctuation">\\</span>Component<span class="token punctuation">\\</span>Validator<span class="token punctuation">\\</span>Constraints</span> <span class="token keyword">as</span> Assert<span class="token punctuation">;</span>\n\n<span class="token comment">/**\n * @ApiResource\n * @ORM\\Entity\n */</span>\n<span class="token keyword">class</span> <span class="token class-name">Product</span> <span class="token comment">// The class name will be used to name exposed resources</span>\n<span class="token punctuation">{</span>\n    <span class="token comment">/**\n     * @ORM\\Column(type="integer")\n     * @ORM\\Id\n     * @ORM\\GeneratedValue(strategy="AUTO")\n     */</span>\n    <span class="token keyword">public</span> <span class="token variable">$id</span><span class="token punctuation">;</span>\n\n    <span class="token comment">/**\n     * @var string $name A name property - this description will be available in the API documentation too.\n     *\n     * @ORM\\Column\n     * @Assert\\NotBlank\n     */</span>\n    <span class="token keyword">public</span> <span class="token variable">$name</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// Notice the "cascade" option below, this is mandatory if you want Doctrine to automatically persist the related entity</span>\n    <span class="token comment">/**\n     * @ORM\\OneToMany(targetEntity="Offer", mappedBy="product", cascade={"persist"})\n     */</span>\n    <span class="token keyword">public</span> <span class="token variable">$offers</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">__construct</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token variable">$this</span><span class="token operator">-</span><span class="token operator">></span><span class="token property">offers</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayCollection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Initialize $offers as an Doctrine collection</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token comment">// Adding both an adder and a remover as well as updating the reverse relation are mandatory</span>\n    <span class="token comment">// if you want Doctrine to automatically update and persist (thanks to the "cascade" option) the related entity</span>\n    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">addOffer</span><span class="token punctuation">(</span>Offer <span class="token variable">$offer</span><span class="token punctuation">)</span><span class="token punctuation">:</span> void\n    <span class="token punctuation">{</span>\n        <span class="token variable">$offer</span><span class="token operator">-</span><span class="token operator">></span><span class="token property">product</span> <span class="token operator">=</span> <span class="token variable">$this</span><span class="token punctuation">;</span>\n        <span class="token variable">$this</span><span class="token operator">-</span><span class="token operator">></span><span class="token property">offers</span><span class="token operator">-</span><span class="token operator">></span><span class="token function">add</span><span class="token punctuation">(</span><span class="token variable">$offer</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">removeOffer</span><span class="token punctuation">(</span>Offer <span class="token variable">$offer</span><span class="token punctuation">)</span><span class="token punctuation">:</span> void\n    <span class="token punctuation">{</span>\n        <span class="token variable">$offer</span><span class="token operator">-</span><span class="token operator">></span><span class="token property">product</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n        <span class="token variable">$this</span><span class="token operator">-</span><span class="token operator">></span><span class="token property">offers</span><span class="token operator">-</span><span class="token operator">></span><span class="token function">removeElement</span><span class="token punctuation">(</span><span class="token variable">$offer</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-php"><code><span class="token delimiter important">&lt;?php</span>\n<span class="token comment">// api/src/Entity/Offer.php</span>\n\n<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Entity</span><span class="token punctuation">;</span>\n\n<span class="token keyword">use</span> <span class="token package">ApiPlatform<span class="token punctuation">\\</span>Core<span class="token punctuation">\\</span>Annotation<span class="token punctuation">\\</span>ApiResource</span><span class="token punctuation">;</span>\n<span class="token keyword">use</span> <span class="token package">Doctrine<span class="token punctuation">\\</span>ORM<span class="token punctuation">\\</span>Mapping</span> <span class="token keyword">as</span> <span class="token constant">ORM</span><span class="token punctuation">;</span>\n<span class="token keyword">use</span> <span class="token package">Symfony<span class="token punctuation">\\</span>Component<span class="token punctuation">\\</span>Validator<span class="token punctuation">\\</span>Constraints</span> <span class="token keyword">as</span> Assert<span class="token punctuation">;</span>\n\n<span class="token comment">/**\n * An offer from my shop - this description will be automatically extracted form the PHPDoc to document the API.\n *\n * @ApiResource(iri="http://schema.org/Offer")\n * @ORM\\Entity\n */</span>\n<span class="token keyword">class</span> <span class="token class-name">Offer</span>\n<span class="token punctuation">{</span>\n    <span class="token comment">/**\n     * @ORM\\Column(type="integer")\n     * @ORM\\Id\n     * @ORM\\GeneratedValue(strategy="AUTO")\n     */</span>\n    <span class="token keyword">public</span> <span class="token variable">$id</span><span class="token punctuation">;</span>\n\n    <span class="token comment">/**\n     * @ORM\\Column(type="text")\n     */</span>\n    <span class="token keyword">public</span> <span class="token variable">$description</span><span class="token punctuation">;</span>\n\n    <span class="token comment">/**\n     * @ORM\\Column(type="float")\n     * @Assert\\NotBlank\n     * @Assert\\Range(min=0, minMessage="The price must be superior to 0.")\n     * @Assert\\Type(type="float")\n     */</span>\n    <span class="token keyword">public</span> <span class="token variable">$price</span><span class="token punctuation">;</span>\n\n    <span class="token comment">/**\n     * @ORM\\ManyToOne(targetEntity="Product", inversedBy="offers")\n     */</span>\n    <span class="token keyword">public</span> <span class="token variable">$product</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>It is the minimal configuration required to expose <code>Product</code> and <code>Offer</code> entities as JSON-LD documents through an hypermedia\nweb API.</p>\n<p>If you are familiar with the Symfony ecosystem, you noticed that entity classes are also mapped with Doctrine ORM annotations\nand validation constraints from <a href="http://symfony.com/doc/current/book/validation.html" target="_blank" rel="nofollow noopener noreferrer">the Symfony Validator Component</a>.\nThis isn\'t mandatory. You can use <a href="/docs/core/data-providers">your preferred persistence</a> and <a href="/docs/core/validation">validation</a> systems.\nHowever, API Platform Core has built-in support for those library and is able to use them without requiring any specific\ncode or configuration to automatically persist and validate your data. They are good default and we encourage you to use\nthem unless you know what you are doing.</p>\n<p>Thanks to the mapping done previously, API Platform Core will automatically register the following REST <a href="/docs/core/operations">operations</a>\nfor resources of the product type:</p>\n<p>Product</p>\n<table>\n<thead>\n<tr>\n<th>Method</th>\n<th>URL</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>GET</td>\n<td>/products</td>\n<td>Retrieve the (paged) collection</td>\n</tr>\n<tr>\n<td>POST</td>\n<td>/products</td>\n<td>Create a new product</td>\n</tr>\n<tr>\n<td>GET</td>\n<td>/products/{id}</td>\n<td>Retrieve a product</td>\n</tr>\n<tr>\n<td>PUT</td>\n<td>/products/{id}</td>\n<td>Update a product</td>\n</tr>\n<tr>\n<td>DELETE</td>\n<td>/products/{id}</td>\n<td>Delete a product</td>\n</tr>\n</tbody>\n</table>\n<p>The same operations are available for the offer method (routes will start with the <code>/offers</code> pattern).\nRoute prefixes are built by pluralizing the name of the mapped entity class.\nIt is also possible to override the naming convention using <a href="/docs/core/operation-path-naming">operation path namings</a>.</p>\n<p>As an alternative to annotations, you can map entity classes using XML or YAML:</p>\n<p>XML:</p>\n<div class="gatsby-highlight">\n      <pre class="language-xml"><code><span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8" ?></span>\n<span class="token comment">&lt;!-- api/config/api_platform/resources.xml --></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resources</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://api-platform.com/schema/metadata<span class="token punctuation">"</span></span>\n           <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">"</span></span>\n           <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://api-platform.com/schema/metadata\n           https://api-platform.com/schema/metadata/metadata-2.0.xsd<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resource</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>App\\Entity\\Product<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    &lt;resource\n        class="App\\Entity\\Offer"\n        shortName="Offer" <span class="token comment">&lt;!-- optional --></span>\n        description="An offer form my shop" <span class="token comment">&lt;!-- optional --></span>\n        iri="http://schema.org/Offer" <span class="token comment">&lt;!-- optional --></span>\n    />\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resources</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>YAML:</p>\n<div class="gatsby-highlight">\n      <pre class="language-yaml"><code><span class="token comment"># api/config/api_platform/resources.yaml</span>\n<span class="token key atrule">resources</span><span class="token punctuation">:</span>\n    <span class="token key atrule">App\\Entity\\Product</span><span class="token punctuation">:</span> <span class="token null important">~</span>\n    <span class="token key atrule">App\\Entity\\Offer</span><span class="token punctuation">:</span>\n        <span class="token key atrule">shortName</span><span class="token punctuation">:</span> \'Offer\'                   <span class="token comment"># optional</span>\n        <span class="token key atrule">description</span><span class="token punctuation">:</span> \'An offer from my shop\' <span class="token comment"># optional</span>\n        <span class="token key atrule">iri</span><span class="token punctuation">:</span> \'http<span class="token punctuation">:</span>//schema.org/Offer\'       <span class="token comment"># optional</span>\n        <span class="token key atrule">attributes</span><span class="token punctuation">:</span>                          <span class="token comment"># optional</span>\n            <span class="token key atrule">pagination_items_per_page</span><span class="token punctuation">:</span> <span class="token number">25    </span><span class="token comment"># optional</span>\n</code></pre>\n      </div>\n<p><strong>You\'re done!</strong></p>\n<p>You now have a fully featured API exposing your entities.\nRun the Symfony app (<code>bin/console server:run</code>) and browse the API entrypoint at <code>http://localhost:8000/api</code>.</p>\n<p>Interact with the API using a REST client (we recommend <a href="https://www.getpostman.com/" target="_blank" rel="nofollow noopener noreferrer">Postman</a>) or an Hydra aware application\n(you should give <a href="https://github.com/lanthaler/HydraConsole" target="_blank" rel="nofollow noopener noreferrer">Hydra Console</a> a try). Take\na look at the usage examples in <a href="https://github.com/api-platform/core/tree/master/features" target="_blank" rel="nofollow noopener noreferrer">the <code>features</code> directory</a>.</p>'},navDoc:{edges:[{node:{title:"The Distribution",path:"distribution",items:[{id:"index",title:"Creating a Fully Featured API in 5 Minutes",anchors:null},{id:"testing",title:"Testing and Specifying the API",anchors:null}]}},{node:{title:"The API Component",path:"core",items:[{id:"index",title:"Introduction",anchors:null},{id:"getting-started",title:"Getting Started",anchors:[{id:"installing-api-platform-core",title:"Installing API Platform Core"},{id:"before-reading-this-documentation",title:"Before Reading this Documentation"},{id:"mapping-the-entities",title:"Mapping the Entities"}]},{id:"configuration",title:"Configuration",anchors:null},{id:"operations",title:"Operations",anchors:[{id:"enabling-and-disabling-operations",title:"Enabling and Disabling Operations"},{id:"configuring-operations",title:"Configuring Operations"},{id:"subresources",title:"Subresources"},{id:"creating-custom-operations-and-controllers",title:"Creating Custom Operations and Controllers"}]},{id:"default-order",title:"Overriding Default Order",anchors:null},{id:"filters",title:"Filters",anchors:[{id:"doctrine-orm-filters",title:"Doctrine ORM Filters"},{id:"serializer-filters",title:"Serializer Filters"},{id:"creating-custom-filters",title:"Creating Custom Filters"},{id:"apifilter-annotation",title:"ApiFilter Annotation"}]},{id:"serialization",title:"The Serialization Process",anchors:[{id:"overall-process",title:"Overall Process"},{id:"available-serializers",title:"Available Serializers"},{id:"the-serialization-context-groups-and-relations",title:"The Serialization Context, Groups and Relations"},{id:"using-serialization-groups",title:"Using Serialization Groups"},{id:"using-different-serialization-groups-per-operation",title:"Using Different Serialization Groups per Operation"},{id:"changing-the-serialization-context-dynamically",title:"Changing the Serialization Context Dynamically"},{id:"changing-the-serialization-context-on-a-per-item-basis",title:"Changing the Serialization Context on a Per Item Basis"},{id:"name-conversion",title:"Name Conversion"},{id:"decorating-a-serializer-and-add-extra-data",title:"Decorating a Serializer and Add Extra Data"},{id:"entity-identifier-case",title:"Entity Identifier Case"},{id:"embedding-the-json-ld-context",title:"Embedding the JSON-LD Context"}]},{id:"validation",title:"Validation",anchors:[{id:"using-validation-groups",title:"Using Validation Groups"},{id:"dynamic-validation-groups",title:"Dynamic Validation Groups"},{id:"error-levels-and-payload-serialization",title:"Error Levels and Payload Serialization"}]},{id:"errors",title:"Error Handling",anchors:[{id:"converting-php-exceptions-to-http-errors",title:"Converting PHP Exceptions to HTTP Errors"}]},{id:"pagination",title:"Pagination",anchors:[{id:"disabling-the-pagination",title:"Disabling the Pagination"},{id:"changing-the-number-of-items-per-page",title:"Changing the Number of Items per Page"},{id:"partial-pagination",title:"Partial Pagination"}]},{id:"events",title:"The Event System",anchors:null},{id:"content-negotiation",title:"Content Negotiation",anchors:[{id:"enabling-several-formats",title:"Enabling Several Formats"},{id:"registering-a-custom-serializer",title:"Registering a Custom Serializer"},{id:"creating-a-responder",title:"Creating a Responder"},{id:"writing-a-custom-normalizer",title:"Writing a Custom Normalizer"}]},{id:"external-vocabularies",title:"Using External JSON-LD Vocabularies",anchors:null},{id:"extending-jsonld-context",title:"Extending JSON-LD context",anchors:null},{id:"data-providers",title:"Data Providers",anchors:[{id:"custom-collection-data-provider",title:"Custom Collection Data Provider"},{id:"custom-item-data-provider",title:"Custom Item Data Provider"},{id:"injecting-the-serializer-in-an-itemdataprovider",title:'Injecting the Serializer in an "ItemDataProvider"'}]},{id:"extensions",title:"Extensions",anchors:[{id:"custom-extension",title:"Custom Extension"},{id:"example",title:"Filter upon the current user"}]},{id:"security",title:"Security",anchors:null},{id:"performance",title:"Performance",anchors:[{id:"enabling-the-builtin-http-cache-invalidation-system",title:"Enabling the Built-in HTTP Cache Invalidation System"},{id:"enabling-the-metadata-cache",title:"Enabling the Metadata Cache"},{id:"using-ppm-php-pm",title:"Using PPM (PHP-PM)"},{id:"doctrine-queries-and-indexes",title:"Doctrine Queries and Indexes"}]},{id:"operation-path-naming",title:"Operation Path Naming",anchors:[{id:"configuration",title:"Configuration"},{id:"create-a-custom-operation-path-resolver",title:"Create a Custom Operation Path Naming"}]},{id:"form-data",title:"Accept application/x-www-form-urlencoded Form Data",anchors:null},{id:"fosuser-bundle",title:"FOSUserBundle Integration",anchors:[{id:"installing-the-bundle",title:"Installing the Bundle"},{id:"enabling-the-bridge",title:"Enabling the Bridge"},{id:"creating-a-user-entity-with-serialization-groups",title:'Creating a "User" Entity with Serialization Groups'}]},{id:"jwt",title:"Adding a JWT authentication using LexikJWTAuthenticationBundle",anchors:[{id:"testing-with-swagger",title:"Testing with Swagger"},{id:"testing-with-behat",title:"Testing with Behat"}]},{id:"nelmio-api-doc",title:"NelmioApiDocBundle integration",anchors:null},{id:"angularjs-integration",title:"AngularJS Integration",anchors:[{id:"restangular",title:"Restangular"},{id:"ng-admin",title:"ng-admin"}]},{id:"swagger",title:"Swagger Support",anchors:[{id:"override-swagger-documentation",title:"Override Swagger documentation"}]},{id:"graphql",title:"GraphQL Support",anchors:[{id:"overall-view",title:"Overall View"},{id:"enabling-graphql",title:"Enabling GraphQL"},{id:"graphiql",title:"GraphiQL"}]},{id:"dto",title:"Handling Data Transfer Objects (DTOs)",anchors:null}]}},{node:{title:"The Schema Generator Component",path:"schema-generator",items:[{id:"index",title:"Introduction",anchors:null},{id:"getting-started",title:"Getting Started",anchors:null},{id:"configuration",title:"Configuration",anchors:null}]}},{node:{title:"The Admin Component",path:"admin",items:[{id:"index",title:"Introduction",anchors:[{id:"features",title:"Features"}]},{id:"getting-started",title:"Getting Started",anchors:[{id:"installation",title:"Installation"},{id:"creating-the-admin",title:"Creating the Admin"},{id:"customizing-the-admin",title:"Customizing the Admin"}]},{id:"authentication-support",title:"Authentication Support",anchors:null},{id:"handling-relations-to-collections",title:"Handling Relations to Collections",anchors:[{id:"using-an-autocomplete-input-for-relations",title:"Using an Autocomplete Input for Relations"}]}]}},{node:{title:"The Client Generator Component",path:"client-generator",items:[{id:"index",title:"Introduction",anchors:[{id:"features",title:"Features"}]},{id:"react",title:"React generator",anchors:null},{id:"vuejs",title:"Vue.js generator",anchors:null},{id:"troubleshooting",title:"Troubleshooting",anchors:null}]}},{node:{title:"Deployment",path:"deployment",items:[{id:"index",title:"Introduction",anchors:null},{id:"kubernetes",title:"Deploying to a Kubernetes Cluster",anchors:null},{id:"heroku",title:"Deploying an API Platform App on Heroku",anchors:null}]}},{node:{title:"Extra",path:"extra",items:[{id:"releases",title:"The Release Process",anchors:null},{id:"philosophy",title:"The Project's Philosophy",anchors:null},{id:"troubleshooting",title:"Troubleshooting",anchors:null},{id:"contribution-guides",title:"Contribution Guides",anchors:null},{id:"conduct",title:"Contributor Code Of Conduct",anchors:null}]}}]}},pathContext:{path:"docs/core/getting-started",current:{path:"docs/core/getting-started",title:"The API Component - Getting Started"},prev:{path:"docs/core/index",title:"Introduction",rootPath:"The API Component"},next:{path:"docs/core/configuration",title:"Configuration",rootPath:"The API Component"}}}}});
//# sourceMappingURL=path---docs-core-getting-started-6778d250172d4c8af080.js.map