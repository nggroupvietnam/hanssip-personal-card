(function () {
  "use strict";
  var B = window.BUSINESS;

  /* ============================================================
     ICONS — small inline SVGs, no external icon library/request
     ============================================================ */
  var ICONS = {
    call: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    zalo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    whatsapp: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    wechat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M8.7 12.7c-3.6 0-6.5-2.4-6.5-5.4s2.9-5.4 6.5-5.4 6.5 2.4 6.5 5.4c0 .97-.31 1.88-.84 2.67" stroke-linecap="round" stroke-linejoin="round"/><circle cx="6.3" cy="6.7" r=".55" fill="currentColor" stroke="none"/><circle cx="10.6" cy="6.7" r=".55" fill="currentColor" stroke="none"/><path d="M11.4 14.1c0-2.8 2.5-5.1 5.6-5.1s5.6 2.3 5.6 5.1-2.5 5.1-5.6 5.1c-.62 0-1.22-.09-1.77-.26l-2.43 1.31.68-2.2c-1.24-.94-2.04-2.31-2.04-3.96Z" stroke-linecap="round" stroke-linejoin="round"/><circle cx="14.7" cy="13.6" r=".5" fill="currentColor" stroke="none"/><circle cx="19" cy="13.6" r=".5" fill="currentColor" stroke="none"/></svg>',
    factory: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 20V10l6 4v-4l6 4V8l6 4v8H2Z" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 20v-3M12 20v-3M18 20v-3" stroke-linecap="round"/></svg>',
    package: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 8V7a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 7v10a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 17v-1" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.3 7 12 12l8.7-5M12 22V12" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z"/></svg>',
    trending: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m23 6-9.5 9.5-5-5L1 18" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 6h6v6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  };

  function el(tag, attrs, html) {
    var node = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) { node.setAttribute(k, attrs[k]); });
    }
    if (html != null) node.innerHTML = html;
    return node;
  }

  /* ============================================================
     SCROLL-IN SLIDE ANIMATION — subtle fade + slide-up.
     Call markReveal(node, index) when building a card so it gets
     a staggered entrance; the IntersectionObserver in initReveal()
     then triggers it once the element scrolls into view.
     ============================================================ */
  function markReveal(node, index) {
    node.classList.add("reveal");
    if (typeof index === "number") {
      node.style.transitionDelay = Math.min(index, 6) * 70 + "ms";
    }
    return node;
  }

  function initReveal() {
    var nodes = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      nodes.forEach(function (n) { n.classList.add("in-view"); });
      return;
    }
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    nodes.forEach(function (n) { io.observe(n); });
  }

  /* ============================================================
     IDENTITY / CONTACT TEXT
     ============================================================ */
  function hydrateIdentity() {
    document.title = B.seo.title;
    document.getElementById("brandName").textContent = (B.company || "").split(" ")[0] || B.company;

    document.getElementById("heroPortrait").src = B.images.portrait;
    document.getElementById("heroPortrait").alt = B.name;
    document.getElementById("heroLocation").textContent = "📍 " + B.location;
    document.getElementById("heroName").textContent = B.name;
    document.getElementById("heroTitle").textContent = B.title;
    document.getElementById("heroTagline").textContent = B.tagline;
    document.getElementById("heroStatement").textContent = B.heroStatement;

    document.getElementById("aboutPortrait").src = B.images.portrait;
    document.getElementById("aboutPortrait").alt = B.name;
    document.getElementById("aboutName").textContent = B.name;
    document.getElementById("aboutTitle").textContent = B.title;
    document.getElementById("aboutIntro").textContent = B.about.intro;

    document.getElementById("directPortrait").src = B.images.portrait;
    document.getElementById("directPortrait").alt = B.name;
    document.getElementById("dcName").textContent = B.name;
    document.getElementById("dcTitle").textContent = B.title;
    document.getElementById("dcCompany").textContent = B.company;

    var phoneLink = document.getElementById("dcPhone");
    phoneLink.textContent = B.contact.phoneDisplay;
    phoneLink.href = "tel:+" + B.contact.phoneE164;

    var emailLink = document.getElementById("dcEmail");
    emailLink.textContent = B.contact.email;
    emailLink.href = "mailto:" + B.contact.email;

    document.getElementById("leadSuccessEmail").textContent = B.contact.email;
    document.getElementById("leadSuccessEmail").href = "mailto:" + B.contact.email;

    document.getElementById("footerCompany").textContent = B.company;
    var footerWebsite = document.getElementById("footerWebsite");
    footerWebsite.textContent = B.contact.website.replace(/^https?:\/\//, "");
    footerWebsite.href = B.contact.website;

    document.getElementById("year").textContent = new Date().getFullYear();

    if (B.seo.canonicalUrl) {
      document.getElementById("canonicalLink").href = B.seo.canonicalUrl;
    } else {
      document.getElementById("canonicalLink").remove();
    }

    if (B.images.logo) {
      var brand = document.getElementById("brandLink");
      brand.innerHTML = '<img src="' + B.images.logo + '" alt="' + B.company + '" style="height:28px">';
    }

    // Hero background image is applied via CSS var so a missing file
    // gracefully falls back to the solid charcoal gradient underneath.
    document.documentElement.style.setProperty(
      "--hero-bg-image",
      "url(" + B.images.heroBackground + ")"
    );
  }

  /* ============================================================
     CONTACT BUTTON SETS (hero, sticky bar, direct-contact)
     ============================================================ */
  function contactTargets() {
    return [
      { key: "call", label: "Call", icon: ICONS.call, href: "tel:+" + B.contact.phoneE164 },
      { key: "zalo", label: "Zalo", icon: ICONS.zalo, href: B.contact.zaloUrl },
      { key: "whatsapp", label: "WhatsApp", icon: ICONS.whatsapp, href: B.contact.whatsappUrl },
      { key: "email", label: "Email", icon: ICONS.email, href: "mailto:" + B.contact.email },
    ];
  }

  // Direct-contact section swaps Call for WeChat. There's no public
  // WeChat deep-link format (WeChat blocks add-by-link for spam
  // reasons), so this copies the real phone number and points the
  // visitor at WeChat's own "search by phone" Add Friends flow —
  // using only real data already on file, nothing invented.
  function directContactTargets() {
    return [
      { key: "wechat", label: "WeChat", icon: ICONS.wechat, href: "#", wechat: true },
      { key: "zalo", label: "Zalo", icon: ICONS.zalo, href: B.contact.zaloUrl },
      { key: "whatsapp", label: "WhatsApp", icon: ICONS.whatsapp, href: B.contact.whatsappUrl },
      { key: "email", label: "Email", icon: ICONS.email, href: "mailto:" + B.contact.email },
    ];
  }

  function handleWechatClick(e) {
    e.preventDefault();
    var note = document.getElementById("dcNote");
    var message = "Phone number copied (" + B.contact.phoneDisplay + ") — search it in WeChat under Add Friends.";
    if (navigator.clipboard) {
      navigator.clipboard.writeText(B.contact.phoneE164).then(function () {
        if (note) note.textContent = message;
      }).catch(function () {
        if (note) note.textContent = "Find me on WeChat by searching " + B.contact.phoneDisplay + " under Add Friends.";
      });
    } else if (note) {
      note.textContent = "Find me on WeChat by searching " + B.contact.phoneDisplay + " under Add Friends.";
    }
  }

  function renderPillRow(container, className, targets) {
    (targets || contactTargets()).forEach(function (t) {
      var a = el("a", { href: t.href, class: className, target: t.key === "zalo" || t.key === "whatsapp" ? "_blank" : "_self", rel: "noopener" }, t.icon + "<span>" + t.label + "</span>");
      if (t.wechat) a.addEventListener("click", handleWechatClick);
      container.appendChild(a);
    });
  }

  function hydrateContactRows() {
    renderPillRow(document.getElementById("heroContactRow"), "contact-pill");
    renderPillRow(document.getElementById("stickyBar"), "");
    renderPillRow(document.getElementById("directContactRow"), "dc-btn", directContactTargets());
  }

  /* ============================================================
     WHY GRID
     ============================================================ */
  function hydrateWhy() {
    var grid = document.getElementById("whyGrid");
    B.sellingPoints.forEach(function (p, i) {
      var card = el(
        "article",
        { class: "why-card" },
        '<span class="why-num">' + p.number + "</span><h3>" + p.title + "</h3><p>" + p.description + "</p>"
      );
      grid.appendChild(markReveal(card, i));
    });
  }

  /* ============================================================
     OPPORTUNITIES
     ============================================================ */
  function hydrateOpportunities() {
    var grid = document.getElementById("opportunitiesGrid");
    B.opportunities.forEach(function (o, i) {
      var tags = o.suitableFor.map(function (t) { return '<span class="opp-tag">' + t + "</span>"; }).join("");
      var card = el(
        "article",
        { class: "opp-card" },
        '<div class="opp-image">' +
          (o.isSample ? '<span class="opp-sample-tag">Sample Listing</span>' : "") +
          '<span class="opp-image-placeholder">Add photo at<br><code>' + o.image + "</code></span></div>" +
          '<div class="opp-body">' +
          "<h3>" + o.name + "</h3>" +
          '<p class="opp-meta">Location: <strong>' + o.location + "</strong></p>" +
          '<p class="opp-meta">Available area: <strong>' + o.availableArea + "</strong></p>" +
          '<div class="opp-tags">' + tags + "</div>" +
          '<a href="#lead" class="btn btn-outline btn-block">Ask About This Site</a>' +
          "</div>"
      );
      grid.appendChild(markReveal(card, i));
    });
  }

  /* ============================================================
     AUDIENCE
     ============================================================ */
  function hydrateAudience() {
    var grid = document.getElementById("audienceGrid");
    B.audiences.forEach(function (a, i) {
      var card = el(
        "div",
        { class: "audience-card" },
        (ICONS[a.icon] || "") + "<h3>" + a.title + "</h3><p>" + a.description + "</p>"
      );
      grid.appendChild(markReveal(card, i));
    });
  }

  /* ============================================================
     ABOUT FACTS
     ============================================================ */
  function hydrateAboutFacts() {
    var wrap = document.getElementById("aboutFacts");
    var facts = [
      ["Experience", B.about.yearsExperience],
      ["Areas covered", B.about.areasCovered],
      ["Industrial parks", B.about.industrialParks],
      ["Languages", B.about.languages],
    ];
    facts.forEach(function (f) {
      wrap.appendChild(el("div", null, "<dt>" + f[0] + "</dt><dd>" + f[1] + "</dd>"));
    });
  }

  /* ============================================================
     LEAD FORM
     Frontend-only submission: opens a pre-filled mailto: link so
     the inquiry is genuinely sent, with no backend required.
     TODO (to connect a real API/CRM instead of mailto):
       replace the body of submitLead() with e.g.
         fetch("https://your-api.example.com/leads", {
           method: "POST",
           headers: { "Content-Type": "application/json" },
           body: JSON.stringify(data),
         })
     ============================================================ */
  function submitLead(data) {
    var subject = "Industrial Land Inquiry — " + data.name;
    var bodyLines = [
      "Name: " + data.name,
      "Company: " + (data.company || "-"),
      "Industry: " + (data.industry || "-"),
      "Required land area: " + (data.area || "-"),
      "Preferred location: " + (data.location || "-"),
      "Expected timeline: " + (data.timeline || "-"),
      "Phone / WhatsApp / Zalo: " + data.phone,
      "Email: " + data.email,
    ];
    var mailto =
      "mailto:" + B.contact.email +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(bodyLines.join("\n"));
    window.location.href = mailto;
  }

  function hydrateLeadForm() {
    var form = document.getElementById("leadForm");
    var success = document.getElementById("leadSuccess");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      var data = {
        name: form.name.value.trim(),
        company: form.company.value.trim(),
        industry: form.industry.value.trim(),
        area: form.area.value.trim(),
        location: form.location.value.trim(),
        timeline: form.timeline.value.trim(),
        phone: form.phone.value.trim(),
        email: form.email.value.trim(),
      };
      submitLead(data);
      form.hidden = true;
      success.hidden = false;
      success.scrollIntoView({ block: "center" });
    });
  }

  /* ============================================================
     KEEP CONTACT — vCard download + Web Share
     ============================================================ */
  function buildVCard() {
    var nameParts = B.name.split(" ");
    var lines = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      "N:" + nameParts.slice(-1)[0] + ";" + nameParts.slice(0, -1).join(" ") + ";;;",
      "FN:" + B.name,
      "ORG:" + B.company,
      "TITLE:" + B.title,
      "TEL;TYPE=CELL:+" + B.contact.phoneE164,
      "EMAIL:" + B.contact.email,
      "URL:" + B.contact.website,
      "END:VCARD",
    ];
    return lines.join("\r\n");
  }

  function hydrateKeepContact() {
    document.getElementById("addContactBtn").addEventListener("click", function () {
      var blob = new Blob([buildVCard()], { type: "text/vcard;charset=utf-8" });
      var url = URL.createObjectURL(blob);
      var a = el("a", { href: url, download: B.name.replace(/\s+/g, "_") + ".vcf" });
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    });

    var shareBtn = document.getElementById("sharePageBtn");
    var note = document.getElementById("shareNote");
    shareBtn.addEventListener("click", function () {
      var shareData = {
        title: B.seo.title,
        text: B.heroStatement,
        url: window.location.href,
      };
      if (navigator.share) {
        navigator.share(shareData).catch(function () {});
      } else if (navigator.clipboard) {
        navigator.clipboard.writeText(shareData.url).then(function () {
          note.textContent = "Link copied to clipboard.";
        });
      } else {
        note.textContent = shareData.url;
      }
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    hydrateIdentity();
    hydrateContactRows();
    hydrateWhy();
    hydrateOpportunities();
    hydrateAudience();
    hydrateAboutFacts();
    hydrateLeadForm();
    hydrateKeepContact();

    [
      ".about-portrait", ".about-content",
      "#leadForm",
      "#directContactRow", ".direct-contact-card",
      ".keep-actions",
    ].forEach(function (sel) {
      var node = document.querySelector(sel);
      if (node) markReveal(node);
    });
    initReveal();
  });
})();
