<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <title data-i18n="title">GitHub profile readme generator - by @arturssmirnovs</title>
    <meta name="description" content="GitHub profile readme generator is a tool that allows you to create simple and beautiful readme that you can copy/paste and include in your profile repository as profile preview." />

    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="@artuurssmirnovs" />
    <meta name="twitter:title" content="GitHub profile readme generator" />
    <meta name="twitter:description" content="GitHub profile readme generator is a tool that allows you to create simple and beautiful readme that you can copy/paste and include in your profile repository as profile preview." />
    <meta name="twitter:creator" content="@arturssmirnovs" />
    <meta name="twitter:image" content="https://arturssmirnovs.github.io/github-profile-readme-generator/images/banner.png" />

    <meta property="og:title" content="GitHub profile readme generator" />
    <meta property="og:type" content="article" />
    <meta property="og:url" content="https://arturssmirnovs.github.io/github-profile-readme-generator/" />
    <meta property="og:image" content="https://arturssmirnovs.github.io/github-profile-readme-generator/images/banner.png" />
    <meta property="og:description" content="GitHub profile readme generator is a tool that allows you to create simple and beautiful readme that you can copy/paste and include in your profile repository as profile preview." />
    <meta property="og:site_name" content="artuurs.smirnovs" />

    <link href="https://arturssmirnovs.github.io/github-profile-readme-generator/" rel="canonical" />
    <!-- <link rel="icon" type="image/png" href="images/icon.png" /> -->
    <link rel="shortcut icon" href="./images/github-light.png" type="image/x-icon" id="faviconTag">

    <link rel="stylesheet" href="css/bootstrap.min.css" />
    <link rel="stylesheet" href="css/vue-simple-markdown.css" />
    <link rel="stylesheet" href="css/style.css" />
</head>
<body>
    <!-- TODO: Record new GIF for README -->
    <div id="app" class="container-xl">
        <app-nav>
            <div class="jumbotron">
                <h1 class="display-5 bold" data-i18n="jumbotron.title">GitHub Profile Readme Generator</h1>
                <p class="lead" data-i18n="jumbotron.description">Super simple GitHub profile Readme generator made with <span style="color: #41B883; font-weight: bold;">Vue.js</span>, that allows you to create beautiful Readme files that you can copy/paste in your profile.</p>
                <hr class="my-4">
                
                <form id="language">
                    <div class="custom-control custom-radio">
                        <input class="custom-control-input" type="radio" id="languageEn" value="en" v-model="data.language" v-on:change="switchLanguage" aria-label="English Selector" checked>
                        <label class="custom-control-label" for="languageEn">English</label>
                    </div>
                    <div class="custom-control custom-radio">
                        <input class="custom-control-input" type="radio" id="languageEs" value="es" v-model="data.language" v-on:change="switchLanguage" aria-label="Spanish Selector">
                        <label class="custom-control-label" for="languageEs">Español</label>
                    </div>
                </form>
                <hr class="my-4">
                <p data-i18n="jumbotron.callToAction">What is a GitHub profile Readme? Check out the repository to learn more.</p>
                <p class="lead mb-0">
                    <a class="btn btn-primary btn-lg" href="https://github.com/arturssmirnovs/github-profile-readme-generator" target="_blank" role="button" data-i18n="jumbotron.learnButton">Learn more</a>
                </p>
            </div>
        </app-nav>

        <app-view class="row">
            <app-content class="col-xs-12 col-md-6">
                <div class="md-tips mt-3">
                    <p data-i18n="markdownTips.title">Markdown Tips:</p>
                    <ul>
                        <li data-i18n="markdownTips.bolden">To <b>bolden</b> the text, wrap it with two asterisks (*) (<code>**<b>word</b>**</code>)</li>
                        <li data-i18n="markdownTips.italize">To <i>italisize</i> the text, wrap it with one asterisk (*) (<code>*<i>word</i>*</code>)</li>
                        <li data-i18n="markdownTips.strikethrough">To <s>strikethrough</s> the text, wrap it with two tildes (~) (<code>~~<s>word</s>~~</code>)</li>
                        <li data-i18n="markdownTips.link">To make a <a href="#">link</a>, place the link text in brackets and the url in parentheses
                            (<code>[<a href="http://example.com">link</a>](http://example.com)</code>)</li>
                        <li data-i18n="markdownTips.icon">To make an <img class="example-icon" src="images/icon.png" alt="example icon"/> image, place an !, the alt
                            text in brackets, and the url in parentheses (<code>![github](/images/icon.png)</code>)</li>
                    </ul>
                    <p data-i18n="markdownTips.learnMore">
                        Learn more:
                        <a href="https://guides.github.com/features/mastering-markdown/" target="_blank">
                            https://guides.github.com/features/mastering-markdown/
                        </a>
                    </p>
                </div>
                
                <nav class="nav nav-pills nav-justified">
                    <a class="nav-item nav-link" href="#" onclick="return false;" @click="tab = 'header'" :class="[tab == 'header' ? 'active' : '', '']" data-i18n="navbar.header">Header</a>
                    <a class="nav-item nav-link" href="#" onclick="return false;" @click="tab = 'additional'" :class="[tab == 'additional' ? 'active' : '', '']" data-i18n="navbar.additional">Additional</a>
                    <a class="nav-item nav-link" href="#" onclick="return false;" @click="tab = 'social'" :class="[tab == 'social' ? 'active' : '', '']" data-i18n="navbar.spocial">Social</a>
                    <a class="nav-item nav-link" href="#" onclick="return false;" @click="tab = 'stats'" :class="[tab == 'stats' ? 'active' : '', '']" data-i18n="navbar.others">Others</a>
                </nav>

                <div v-show="tab == 'header'" class="tab">
                    <h3 data-i18n="header.title">Header</h3>

                    <div class="form-group">
                        <label data-i18n="header.heading">Heading</label>
                        <input
                            type="text"
                            v-model="data.title"
                            data-i18n="header.headingPlaceholder header.heading"
                            data-i18n-attr="placeholder aria-label"
                            placeholder="Enter text..."
                            class="form-control"
                            aria-label="Heading"
                        />
                    </div>

                    <div class="form-group">
                        <label data-i18n="header.subtitle">Subtitle</label>
                        <input
                            type="text"
                            v-model="data.subtitle"
                            data-i18n="header.subtitlePlaceholder header.subtitle"
                            data-i18n-attr="placeholder aria-label"
                            placeholder="Enter text..."
                            class="form-control"
                            aria-label="Subtitle"
                        />
                    </div>

                    <div class="form-group">
                        <label data-i18n="header.aboutMe">About me</label>
                        <textarea
                            v-model="data.text"
                            data-i18n="header.aboutMePlaceholder header.aboutMe"
                            data-i18n-attr="placeholder aria-label"
                            placeholder="Enter text.."
                            class="form-control"
                            aria-label="About me"
                        >{{data.text}}</textarea>
                    </div>

                    <div class="form-group">
                        <label data-i18n="header.skills">Skills</label>
                        <input
                            type="text"
                            v-model="data.skills"
                            data-i18n="header.skillsPlaceholder header.skills"
                            data-i18n-attr="placeholder aria-label"
                            placeholder="Enter skills..."
                            class="form-control"
                            aria-label="Skills"
                        />
                    </div>

                    <div class="form-group">
                        <label data-i18n="header.bannerUrl">Banner URL</label>
                        <input
                            type="text"
                            v-model="data.banner"
                            data-i18n="header.bannerUrlPlaceholder header.bannerUrl"
                            data-i18n-attr="placeholder aria-label"
                            placeholder="Enter URL..."
                            class="form-control"
                            aria-label="Banner URL"
                        />
                    </div>
                </div>

                <div v-show="tab == 'additional'" class="tab">
                    <h3 data-i18n="additional.title">Additional information</h3>

                    <div class="row">
                        <div class="col-xs-12 col-md-6">
                            <div class="form-group">
                                <label data-i18n="additional.working">🔭 I’m currently working on...</label>
                                <input
                                    type="text"
                                    v-model="data.working"
                                    data-i18n="additional.workingPlaceholder additional.working"
                                    data-i18n-attr="placeholder aria-label"
                                    placeholder="Enter details..."
                                    class="form-control"
                                    aria-label="I’m currently working on..."
                                />
                            </div>
                        </div>

                        <div class="col-xs-12 col-md-6">
                            <div class="form-group">
                                <label data-i18n="additional.learning">🌱 I’m currently learning...</label>
                                <input
                                    type="text"
                                    v-model="data.learning"
                                    data-i18n="additional.learningPlaceholder additional.learning"
                                    data-i18n-attr="placeholder aria-label"
                                    placeholder="Enter details..."
                                    class="form-control"
                                    aria-label="I’m currently learning..."
                                />
                            </div>
                        </div>

                        <div class="col-xs-12 col-md-6">
                            <div class="form-group">
                                <label data-i18n="additional.collaborate">👯 I want to collaborate on...</label>
                                <input
                                    type="text"
                                    v-model="data.collaborate"
                                    data-i18n="additional.collaboratePlaceholder additional.collaborate"
                                    data-i18n-attr="placeholder aria-label"
                                    placeholder="Enter details..."
                                    class="form-control"
                                    aria-label="I’m looking to collaborate on..."
                                />
                            </div>
                        </div>

                        <div class="col-xs-12 col-md-6">
                            <div class="form-group">
                                <label data-i18n="additional.help">🤔 I’m looking for help with...</label>
                                <input
                                    type="text"
                                    v-model="data.help"
                                    data-i18n="additional.helpPlaceholder additional.help"
                                    data-i18n-attr="placeholder aria-label"
                                    placeholder="Enter details..."
                                    class="form-control"
                                    aria-label="I’m looking for help with..."
                                />
                            </div>
                        </div>

                        <div class="col-xs-12 col-md-6">
                            <div class="form-group">
                                <label data-i18n="additional.ask">💬 Ask me about...</label>
                                <input
                                    type="text"
                                    v-model="data.ask"
                                    data-i18n="additional.askPlaceholder additional.ask"
                                    data-i18n-attr="placeholder aria-label"
                                    placeholder="Enter details..."
                                    class="form-control"
                                    aria-label="Ask me about..."
                                />
                            </div>
                        </div>

                        <div class="col-xs-12 col-md-6">
                            <div class="form-group">
                                <label data-i18n="additional.reach">📫 How to reach me:</label>
                                <input
                                    type="text"
                                    v-model="data.reach"
                                    data-i18n="additional.reachPlaceholder additional.reach"
                                    data-i18n-attr="placeholder aria-label"
                                    placeholder="Enter details..."
                                    class="form-control"
                                    aria-label="How to reach me"
                                />
                            </div>
                        </div>

                        <div class="col-xs-12 col-md-6">
                            <div class="form-group">
                                <label data-i18n="additional.pronouns">😄 Pronouns:</label>
                                <input
                                    type="text"
                                    v-model="data.pronouns"
                                    data-i18n="additional.pronounsPlaceholder additional.pronouns"
                                    data-i18n-attr="placeholder aria-label"
                                    placeholder="Enter details..."
                                    class="form-control"
                                    aria-label="Pronouns"
                                />
                            </div>
                        </div>

                        <div class="col-xs-12 col-md-6">
                            <div class="form-group">
                                <label data-i18n="additional.fun">⚡ Fun fact:</label>
                                <input
                                    type="text"
                                    v-model="data.fact"
                                    data-i18n="additional.funPlaceholder additional.fun"
                                    data-i18n-attr="placeholder aria-label"
                                    placeholder="Enter details..."
                                    class="form-control"
                                    aria-label="Fun fact:"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div v-show="tab == 'social'" class="tab">
                    <h3 data-i18n="social.title">Social information</h3>

                    <div class="row">
                        <div class="col-xs-12 col-md-6">                        
                            <div class="form-group">
                                <div class="social-title">
                                    <brand-logo brand="github"></brand-logo>
                                    <label data-i18n="social.github">GitHub</label>
                                </div>
                                <input
                                    type="text"
                                    v-model="data.github"
                                    data-i18n="social.githubPlaceholder social.github"
                                    data-i18n-attr="placeholder aria-label"
                                    placeholder="Enter your username..."
                                    class="form-control"
                                    aria-label="Github"
                                />
                            </div>
                        </div>

                        <div class="col-xs-12 col-md-6">                        
                            <div class="form-group">
                                <div class="social-title">
                                    <brand-logo brand="dev-dot-to"></brand-logo>
                                    <label data-i18n="social.devto">DEV.TO</label>
                                </div>
                                <input
                                    type="text"
                                    v-model="data.dev"
                                    data-i18n="social.devtoPlaceholder social.devto"
                                    data-i18n-attr="placeholder aria-label"
                                    placeholder="Enter username..."
                                    class="form-control"
                                    aria-label="DEV.TO"
                                />
                            </div>
                        </div>

                        <div class="col-xs-12 col-md-6">                        
                            <div class="form-group">
                                <div class="social-title">
                                    <brand-logo brand="hashnode"></brand-logo>
                                    <label data-i18n="social.hashnode">Hashnode</label>
                                </div>
                                <input
                                    type="text"
                                    v-model="data.hashnode"
                                    data-i18n="social.hashnodePlaceholder social.hashnode"
                                    data-i18n-attr="placeholder aria-label"
                                    placeholder="Enter blog URL..."
                                    class="form-control"
                                    aria-label="Hashnode"
                                />
                            </div>
                        </div>

                        <div class="col-xs-12 col-md-6">
                            <div class="form-group">
                                <div class="social-title">
                                    <brand-logo brand="linkedin"></brand-logo>
                                    <label data-i18n="social.linkedin">LinkedIn</label>
                                </div>
                                <input
                                    type="text"
                                    v-model="data.linkedin"
                                    data-i18n="social.linkedinPlaceholder social.linkedin"
                                    data-i18n-attr="placeholder aria-label"
                                    placeholder="Enter your username..."
                                    class="form-control"
                                    aria-label="LinkedIn"
                                />
                            </div>
                        </div>

                        <div class="col-xs-12 col-md-6">
                            <div class="form-group">
                                <div class="social-title">
                                    <brand-logo brand="facebook"></brand-logo>
                                    <label data-i18n="social.facebook">Facebook</label>
                                </div>
                                <input
                                    type="text"
                                    v-model="data.facebook"
                                    data-i18n="social.facebookPlaceholder social.facebook"
                                    data-i18n-attr="placeholder aria-label"
                                    placeholder="Enter your username..."
                                    class="form-control"
                                    aria-label="Facebook"
                                />
                            </div>
                        </div>

                        <div class="col-xs-12 col-md-6">
                            <div class="form-group">
                                <div class="social-title">
                                    <brand-logo brand="instagram"></brand-logo>
                                    <label data-i18n="social.instagram">Instagram</label>
                                </div>
                                <input
                                    type="text"
                                    v-model="data.instagram"
                                    data-i18n="social.instagramPlaceholder social.instagram"
                                    data-i18n-attr="placeholder aria-label"
                                    placeholder="Enter your username..."
                                    class="form-control"
                                    aria-label="Instagram"
                                />
                            </div>
                        </div>

                        <div class="col-xs-12 col-md-6">
                            <div class="form-group">
                                <div class="social-title">
                                    <brand-logo brand="twitter"></brand-logo>
                                    <label data-i18n="social.twitter">Twitter</label>
                                </div>
                                <input
                                    type="text"
                                    v-model="data.twitter"
                                    data-i18n="social.twitterPlaceholder social.twitter"
                                    data-i18n-attr="placeholder aria-label"
                                    placeholder="Enter your username..."
                                    class="form-control"
                                    aria-label="Twitter"
                                />
                            </div>
                        </div>

                        <div class="col-xs-12 col-md-6">
                            <div class="form-group">
                                <div class="social-title">
                                    <brand-logo brand="codepen"></brand-logo>
                                    <label data-i18n="social.codepen">Codepen</label>
                                </div>
                                <input
                                    type="text"
                                    v-model="data.codepen"
                                    data-i18n="social.codepenPlaceholder social.codepen"
                                    data-i18n-attr="placeholder aria-label"
                                    placeholder="Enter your username..."
                                    class="form-control"
                                    aria-label="codepen"
                                />
                            </div>
                        </div>
                        
                        <div class="col-xs-12 col-md-6">
                            <div class="form-group">
                                <div class="social-title">
                                   <brand-logo brand="codesandbox"></brand-logo>
                                    <label data-i18n="social.codeSandbox">CodeSandbox</label> 
                                </div>
                                <input
                                    type="text"
                                    v-model="data.codesandbox"
                                    data-i18n="social.codeSandboxPlaceholder social.codeSandbox"
                                    data-i18n-attr="placeholder aria-label"
                                    placeholder="Enter your username..."
                                    class="form-control"
                                    aria-label="CodeSandbox"
                                />
                            </div>
                        </div>
                        
                        <div class="col-xs-12 col-md-6">
                            <div class="form-group">
                                <div class="social-title">
                                    <brand-logo brand="stackoverflow"></brand-logo>
                                    <label data-i18n="social.stackOverflow">Stack Overflow</label>
                                </div>
                                <input
                                    type="text"
                                    v-model="data.stackoverflow"
                                    data-i18n="social.stackOverflowPlaceholder social.stackOverflow"
                                    data-i18n-attr="placeholder aria-label"
                                    placeholder="Enter your user ID..."
                                    class="form-control"
                                    aria-label="Stack Overflow"
                                />
                            </div>
                        </div>

                        <div class="col-xs-12 col-md-6">
                            <div class="form-group">
                                <div class="social-title">
                                    <brand-logo brand="youtube"></brand-logo>
                                    <label data-i18n="social.youtube">YouTube</label>
                                </div>
                                <input
                                    type="text"
                                    v-model="data.youtube"
                                    data-i18n="social.youtubePlaceholder social.youtube"
                                    data-i18n-attr="placeholder aria-label"
                                    placeholder="Enter your user ID..."
                                    class="form-control"
                                    aria-label="YouTube"
                                />
                            </div>
                        </div>

                        <div class="col-xs-12 col-md-6">
                            <div class="form-group">
                                <div class="social-title">
                                    <brand-logo brand="reddit"></brand-logo>
                                    <label data-i18n="social.reddit">Reddit</label>
                                </div>
                                <input
                                    type="text"
                                    v-model="data.reddit"
                                    data-i18n="social.redditPlaceholder social.reddit"
                                    data-i18n-attr="placeholder aria-label"
                                    placeholder="Enter your username..."
                                    class="form-control"
                                    aria-label="Reddit"
                                />
                            </div>
                        </div>

                        <div class="col-xs-12 col-md-12">
                            <div class="form-group">
                                <div class="social-title">
                                    <brand-logo brand="icloud"></brand-logo>
                                    <label data-i18n="social.website">Website</label>
                                </div>
                                <input
                                    type="text"
                                    v-model="data.website"
                                    data-i18n="social.websitePlaceholder social.website"
                                    data-i18n-attr="placeholder aria-label"
                                    placeholder="Enter URL..."
                                    class="form-control"
                                    aria-label="Website"
                                />
                            </div>
                        </div>

                        <div class="col-xs-12 col-md-12">
                            <h4 data-i18n="social.others">Others</h4>
                        </div>
                        <div class="col-xs-12 col-md-12" v-for="item in data.items">
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group">
                                        <label data-i18n="social.icon">Icon</label>
                                        <select v-model="item.icon" class="form-control">
                                            <option v-for="icon in icons" :value="icon.title">{{icon.title}}</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group">
                                        <label data-i18n="social.link">Link</label>
                                        <input
                                            type="text"
                                            v-model="item.value"
                                            data-i18n="social.linkPlaceholder social.link"
                                            data-i18n-attr="placeholder aria-label"
                                            placeholder="Enter URL..."
                                            class="form-control"
                                            aria-label="Enter URL..."
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-md-12">
                            <button @click="addItem" class="btn btn-primary" data-i18n="social.addButton">Add more</button>
                        </div>
                    </div>
                </div>

                <div v-show="tab == 'stats'" class="tab">

                    <div class="row">
                        <div class="col-xs-12 col-md-12">
                            <div class="form-group mb-4">
                                <div class="social-title">
                                    <label data-i18n="social.github">GitHub</label>
                                </div>
                                <input
                                        type="text"
                                        v-model="data.github"
                                        data-i18n="social.githubPlaceholder social.github"
                                        data-i18n-attr="placeholder aria-label"
                                        placeholder="Enter your username..."
                                        class="form-control mb-2"
                                        aria-label="Github"
                                />
                                <p data-i18n="statistics.description">GitHub username required</p>
                            </div>
                        </div>
                    </div>

                    <div v-bind:class="[data.github ? 'social-stats active' : 'social-stats disabled']">
                        <h3 data-i18n="statistics.title">Statistics</h3>

                        <div class="row">
                            <div class="col-xs-12 col-md-6">
                                <div class="custom-control custom-checkbox mb-2">
                                    <input type="checkbox" class="custom-control-input" id="customCheck1" v-model="data.views" :disabled="!data.github">
                                    <label
                                            class="custom-control-label"
                                            for="customCheck1"
                                            data-i18n="statistics.showViews"
                                    >Show profile views</label>
                                </div>
                            </div>
                            <div class="col-xs-12 col-md-6">
                                <div class="custom-control custom-checkbox mb-2">
                                    <input type="checkbox" class="custom-control-input" id="customCheck2" v-model="data.stats" :disabled="!data.github">
                                    <label
                                            class="custom-control-label"
                                            for="customCheck2"
                                            data-i18n="statistics.showStats"
                                    >Show GitHub statistics</label>
                                </div>
                            </div>
                            <div class="col-xs-12 col-md-6">
                                <div class="custom-control custom-checkbox mb-2">
                                    <input type="checkbox" class="custom-control-input" id="activityStats" v-model="data.activityGraph" :disabled="!data.github">
                                    <label
                                            class="custom-control-label"
                                            for="activityStats"
                                            data-i18n="statistics.activityGraph"
                                    >Show GitHub Activity Graph</label>
                                </div>
                            </div>
                            <div class="col-xs-12 col-md-6">
                                <div class="custom-control custom-checkbox mb-2">
                                    <input type="checkbox" class="custom-control-input" id="customCheck3" v-model="data.languages" :disabled="!data.github">
                                    <label
                                            class="custom-control-label"
                                            for="customCheck3"
                                            data-i18n="statistics.showLanguages"
                                    >Show most used languages</label>
                                </div>
                            </div>
                            <div class="col-xs-12 col-md-6">
                                <div class="custom-control custom-checkbox mb-2">
                                    <input type="checkbox" class="custom-control-input" id="defaultCheck4" v-model="data.private" :disabled="!data.stats" :disabled="!data.github">
                                    <label
                                            class="custom-control-label"
                                            for="defaultCheck4"
                                            data-i18n="statistics.includePrivate"
                                    >Include private repositories</label>
                                </div>
                            </div>
                        </div>

                        <h3 class="mt-3" data-i18n="trophies.title">Github Trophies</h3>

                        <div class="row">
                            <div class="col-xs-12 col-md-6">
                                <div class="custom-control custom-checkbox mb-2">
                                    <input type="checkbox" class="custom-control-input" id="customCheck4" v-model="data.trophy" :disabled="!data.github">
                                    <label
                                            class="custom-control-label"
                                            for="customCheck4"
                                            data-i18n="trophies.showTrophies"
                                    >Show Trophies</label>
                                </div>
                            </div>
                        </div>

                        <h3 class="mt-3" data-i18n="badges.title">Github Badges</h3>

                        <div class="row">
                            <div class="col-xs-12 col-md-6">
                                <div class="custom-control custom-checkbox mb-2">
                                    <input type="checkbox" class="custom-control-input" id="customCheck5" v-model="data.arctic" :disabled="!data.github">
                                    <label
                                            class="custom-control-label"
                                            for="customCheck5"
                                            data-i18n="badges.arctic"
                                    >Arctic Contributor</label>
                                </div>
                            </div>
                            <div class="col-xs-12 col-md-6">
                                <div class="custom-control custom-checkbox mb-2">
                                    <input type="checkbox" class="custom-control-input" id="customCheck6" v-model="data.devprog" :disabled="!data.github">
                                    <label
                                            class="custom-control-label"
                                            for="customCheck6"
                                            data-i18n="badges.devProgram"
                                    >Developer Program</label>
                                </div>
                            </div>
                            <div class="col-xs-12 col-md-6">
                                <div class="custom-control custom-checkbox mb-2">
                                    <input type="checkbox" class="custom-control-input" id="customCheck7" v-model="data.star" :disabled="!data.github">
                                    <label
                                            class="custom-control-label"
                                            for="customCheck7"
                                            data-i18n="badges.starsProgram"
                                    >Stars Program</label>
                                </div>
                            </div>
                            <div class="col-xs-12 col-md-6">
                                <div class="custom-control custom-checkbox mb-2">
                                    <input type="checkbox" class="custom-control-input" id="customCheck8" v-model="data.sponsor" :disabled="!data.github">
                                    <label
                                            class="custom-control-label"
                                            for="customCheck8"
                                            data-i18n="badges.sponsor"
                                    >Sponsor</label>
                                </div>
                            </div>
                            <div class="col-xs-12 col-md-6">
                                <div class="custom-control custom-checkbox mb-2">
                                    <input type="checkbox" class="custom-control-input" id="customCheck9" v-model="data.gitpro" :disabled="!data.github">
                                    <label
                                            class="custom-control-label"
                                            for="customCheck9"
                                            data-i18n="badges.pro"
                                    >Github Pro</label>
                                </div>
                            </div>
                        </div>

                        <h3 class="mt-3" data-i18n="metrics.title">GitHub Metrics</h3>

                        <div class="row">
                            <div class="col-xs-12 col-md-6">
                                <div class="custom-control custom-checkbox mb-2">
                                    <input type="checkbox" class="custom-control-input" id="customCheck10" v-model="data.metrics" :disabled="!data.github">
                                    <label
                                            class="custom-control-label"
                                            for="customCheck10"
                                            data-i18n="metrics.showMetrics"
                                    >Show GitHub metrics</label>
                                </div>
                            </div>
                        </div>

                        <h3 class="mt-3" data-i18n="streak.title">GitHub Streak Stats</h3>

                        <div class="row">
                            <div class="col-xs-12 col-md-6">
                                <div class="custom-control custom-checkbox mb-2">
                                    <input type="checkbox" class="custom-control-input" id="customCheck11" v-model="data.streak" :disabled="!data.github">
                                    <label
                                            class="custom-control-label"
                                            for="customCheck11"
                                            data-i18n="streak.showStreak"
                                    >Show GitHub Streak Stats</label>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </app-content>

            <app-sidebar class="col-xs-12 col-md-6 mt-3">

                <div class="card mb-4">
                    <div class="card-body">
                        <h5 class="card-title" data-i18n="preview">Preview</h5>
                        <vue-markdown :source="source"></vue-markdown>
                    </div>
                </div>

                <div class="card mb-4">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center">
                            <h5 class="card-title" data-i18n="code.title">👨‍💻 Code</h5>
                            <button class="btn btn-primary mb-2 d-flex" @click="copyCode">
                                <svg style="width: 1.5rem; height: 1.5rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg> &nbsp;
                                <span data-i18n="code.copyButton">Copy</span>
                            </button>
                        </div>
                        <div class="alert alert-danger" role="alert" v-if="forced" data-i18n="warning">
                            Changing source manually could result in lost of data if you use generation fields again.
                        </div>
                        <!-- TODO: Highlight the textarea as markdown code -->
                        <textarea v-model="source" @keyup="onKeyUp" class="form-control" ref="code">{{ source }}</textarea>
                    </div>
                </div>

            </app-sidebar>

        </app-view>

    </div>

    <footer>
        <div class="container">
            <p data-i18n="author">Made with ❤ by <a href="https://github.com/arturssmirnovs" target="_blank">@arturssmirnovs</a>.</p>
        </div>
    </footer>

    <script src="js/vue.js"></script>
    <script src="js/icons.js"></script>
    <script src="js/markdown.js"></script>
    <script src="js/translator.js"></script>
    <script src="js/script.js?v=2"></script>
    <script>
        const faviconTag = document.getElementById("faviconTag");
        const isDark = window.matchMedia("(prefers-color-scheme: dark)");
        const changeFavicon = () => {
            if (isDark.matches) faviconTag.href = "./images/github-dark.png";
            else faviconTag.href = "./images/github-light.png";
        };
        
        changeFavicon();
        
        isDark.addEventListener('change', changeFavicon);
    </script>
</body>
</html>