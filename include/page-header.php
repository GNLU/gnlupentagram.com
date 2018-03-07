<header class="l-main-header">
<div class="m-hamburger">
<div class="m-hamburger__icon">
<span></span>
<span></span>
<span></span>
<span></span>
</div>
</div> 
<div class="m-navbar">
<a href="/#landing-section" class="m-navbar__logo-link"><span class="m-navbar__logo-icon">
<img src="css/elements/penta-30.png">
</span></a>
<a href="#shareModal" class="m-navbar__icon-link"><span class="m-navbar__share-icon">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 36"><g fill="none" stroke="#FFF" stroke-width="3" stroke-linecap="round" stroke-miterlimit="10"><circle cx="26" cy="6" r="4"/><circle cx="26" cy="30" r="4"/><circle cx="6" cy="18" r="4"/></g></svg>
</span></a>
</div>
 
<div id="shareModal" class="m-share-modal">
<div class="m-share-modal__inner">
<h2 class="m-share-modal__title">SHARE WITH YOUR FRIENDS</h2>
<div class="m-share-modal__content">
<a href="https://www.facebook.com/sharer/sharer.php?u=gnlupentagram.com" target="_blank"><span class="m-main-nav__facebook"></span></a>
<a href="https://twitter.com/home?status=gnlupentagram.com" target="_blank"><span class="m-main-nav__twitter"></span></a>
</div>
</div>
<a href="#close" class="m-share-modal__close">
<span></span>
<span></span>
</a>
</div> 
<nav class="m-main-nav">
<a href="/" class="m-main-nav__logo-link"><span class="m-main-nav__logo-icon"></span></a>
<div class="m-main-nav__inner">
<div class="m-nav-anim--desktop">
<div class="m-nav-anim__inner">
<span class="m-nav-anim__bar--white bar-1"></span>
<span class="m-nav-anim__bar--red bar-2"></span>
<span class="m-nav-anim__bar--white bar-3"></span>
<span class="m-nav-anim__bar--red bar-4"></span>
</div>
</div>
<div class="m-nav-anim--mobile m-nav-anim--left">
<div class="m-nav-anim__inner">
<span class="m-nav-anim__bar--white bar-1"></span>
<span class="m-nav-anim__bar--red bar-2"></span>
<span class="m-nav-anim__bar--white bar-3"></span>
<span class="m-nav-anim__bar--red bar-4"></span>
</div>
</div>
<div class="m-nav-anim--mobile m-nav-anim--right">
<div class="m-nav-anim__inner">
<span class="m-nav-anim__bar--white bar-1"></span>
<span class="m-nav-anim__bar--red bar-2"></span>
<span class="m-nav-anim__bar--white bar-3"></span>
<span class="m-nav-anim__bar--red bar-4"></span>
</div>
</div>
<ul class="m-main-nav_sections">
<li class="m-main-nav_sections--home is-active" id="landing-nav">
<a href="#landing-section">Home</a>
</li>
<li class="m-main-nav_sections--lineup" id="artists-nav">
<a href="#artists-section">Schedule <?php echo $year = date('Y'); ?></a>
</li>
<li class="m-main-nav_sections--tickets" id="tickets-nav">
<a href="#tickets-section">Tickets</a>
</li>
<li class="m-main-nav_sections--download" id="downloads-nav">
<a href="#downloads-section">Downloads</a>
</li>
<li class="m-main-nav_sections--playlist" id="playlist-nav">
<a href="#playlist-section">Relive <?php echo $year-1; ?></a>
</li>
<li class="m-main-nav_sections--sponsers is-active" id="sponsors-nav">
<a href="#sponsors-section">Sponsors</a>
</li>
<li class="m-main-nav_sections--faq" id="faq-nav">
<a href="#faq-section">FAQ</a>
</li>
</ul>
<hr class="m-main-nav__hr">
<div class="m-main-nav__social">
<a href="https://www.youtube.com/user/GNLU" target="_blank"><span class="m-main-nav__youtube"></span></a>
<a href="https://www.facebook.com/<?php echo $fb; ?>" target="_blank"><span class="m-main-nav__facebook"></span></a>
<a href="https://twitter.com/<?php echo $twitter; ?>" target="_blank"><span class="m-main-nav__twitter"></span></a>
</div>
</div>
</nav>
</header>