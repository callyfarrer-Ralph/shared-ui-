const React = require("react");

const tokens = {
  terracotta: "#C46A4A",
  navy: "#1C2A3A",
  sand: "#F4EFEA",
  grey: "#D8D3CE",
  accentBlue: "#4A7FBF"
};

function cx(...parts) {
  return parts.filter(Boolean).join(" ");
}

function SiteShell({ brand, navItems, contact, theme = "farrer", children }) {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      "header",
      { className: `site-header theme-${theme}` },
      React.createElement(
        "a",
        { className: "brand", href: "/" },
        React.createElement("span", { className: "brand-mark", "aria-hidden": "true" }, brand.name.charAt(0)),
        React.createElement("span", null,
          React.createElement("span", { className: "brand-name" }, brand.name),
          React.createElement("span", { className: "brand-detail" }, brand.detail)
        )
      ),
      React.createElement(
        "nav",
        { className: "main-nav", "aria-label": "Primary navigation" },
        navItems.map((item) =>
          React.createElement("a", { key: item.href, href: item.href }, item.label)
        ),
        React.createElement("a", { className: "nav-cta", href: "/contact" }, "Enquire")
      )
    ),
    children,
    React.createElement(
      "footer",
      { className: `site-footer theme-${theme}` },
      React.createElement(
        "div",
        { className: "footer-grid" },
        React.createElement(
          "div",
          null,
          React.createElement("strong", null, contact.name),
          React.createElement("p", null, contact.title),
          React.createElement("p", null, contact.role)
        ),
        React.createElement(
          "div",
          null,
          React.createElement("strong", null, "Contact"),
          React.createElement("p", null, React.createElement("a", { href: `mailto:${contact.email}` }, contact.email)),
          React.createElement("p", null, React.createElement("a", { href: `tel:${contact.phone.replace(/\s/g, "")}` }, contact.phone))
        ),
        React.createElement(
          "div",
          null,
          React.createElement("strong", null, "Service"),
          React.createElement("p", null, "Online therapy only for adults across the UK."),
          React.createElement("p", null, React.createElement("a", { href: "/privacy" }, "Privacy"), " / ", React.createElement("a", { href: "/health" }, "Health"))
        )
      )
    )
  );
}

function Hero({ eyebrow, title, text, primary, secondary, theme = "farrer", highlights = [] }) {
  return React.createElement(
    "section",
    { className: `hero theme-${theme}` },
    React.createElement(
      "div",
      { className: "container hero-inner" },
      React.createElement(
        "div",
        { className: "hero-copy" },
        React.createElement("p", { className: "eyebrow" }, eyebrow),
        React.createElement("h1", null, title),
        React.createElement("p", { className: "hero-text" }, text),
        React.createElement(
          "div",
          { className: "actions" },
          React.createElement("a", { className: "button primary", href: primary.href }, primary.label),
          secondary ? React.createElement("a", { className: "button secondary", href: secondary.href }, secondary.label) : null
        )
      ),
      highlights.length
        ? React.createElement(
            "div",
            { className: "hero-panel" },
            React.createElement("span", { className: "panel-label" }, "What to expect"),
            highlights.map((item) =>
              React.createElement("div", { className: "hero-highlight", key: item.title },
                React.createElement("strong", null, item.title),
                React.createElement("span", null, item.text)
              )
            )
          )
        : null
    )
  );
}

function PageHeader({ eyebrow, title, text, theme = "farrer" }) {
  return React.createElement(
    "section",
    { className: `page-header theme-${theme}` },
    React.createElement(
      "div",
      { className: "container" },
      eyebrow ? React.createElement("p", { className: "eyebrow" }, eyebrow) : null,
      React.createElement("h1", null, title),
      text ? React.createElement("p", null, text) : null
    )
  );
}

function Section({ title, intro, children, tone = "plain" }) {
  return React.createElement(
    "section",
    { className: cx("section", `tone-${tone}`) },
    React.createElement(
      "div",
      { className: "container" },
      title ? React.createElement("h2", null, title) : null,
      intro ? React.createElement("p", { className: "section-intro" }, intro) : null,
      children
    )
  );
}

function CardGrid({ items, columns = 3 }) {
  return React.createElement(
    "div",
    { className: `card-grid columns-${columns}` },
    items.map((item) =>
      React.createElement(
        "article",
        { className: "info-card", key: item.title || item },
        typeof item === "string"
          ? React.createElement("p", null, item)
          : React.createElement(React.Fragment, null, React.createElement("h3", null, item.title), React.createElement("p", null, item.text))
      )
    )
  );
}

function FeatureBand({ eyebrow, title, text, items = [], theme = "farrer" }) {
  return React.createElement(
    "section",
    { className: `feature-band theme-${theme}` },
    React.createElement(
      "div",
      { className: "container feature-grid" },
      React.createElement(
        "div",
        null,
        eyebrow ? React.createElement("p", { className: "eyebrow" }, eyebrow) : null,
        React.createElement("h2", null, title),
        React.createElement("p", null, text)
      ),
      React.createElement(
        "div",
        { className: "feature-list" },
        items.map((item) =>
          React.createElement("div", { key: item.title, className: "feature-item" },
            React.createElement("span", null, item.kicker || "Care"),
            React.createElement("strong", null, item.title),
            React.createElement("p", null, item.text)
          )
        )
      )
    )
  );
}

function ProcessSteps({ steps }) {
  return React.createElement(
    "div",
    { className: "process-steps" },
    steps.map((step, index) =>
      React.createElement("article", { className: "process-step", key: step.title },
        React.createElement("span", null, String(index + 1).padStart(2, "0")),
        React.createElement("h3", null, step.title),
        React.createElement("p", null, step.text)
      )
    )
  );
}

function StatementPanel({ title, text, theme = "farrer" }) {
  return React.createElement(
    "aside",
    { className: `statement-panel theme-${theme}` },
    React.createElement("p", null, title),
    React.createElement("strong", null, text)
  );
}

function TextBlock({ children }) {
  return React.createElement("div", { className: "text-block" }, children);
}

function ContactPanel({ contact, theme = "farrer" }) {
  return React.createElement(
    "div",
    { className: `contact-panel theme-${theme}` },
    React.createElement("h2", null, contact.name),
    React.createElement("p", null, contact.title),
    React.createElement("p", null, contact.role),
    React.createElement("dl", null,
      React.createElement("div", null, React.createElement("dt", null, "Email"), React.createElement("dd", null, React.createElement("a", { href: `mailto:${contact.email}` }, contact.email))),
      React.createElement("div", null, React.createElement("dt", null, "Phone"), React.createElement("dd", null, React.createElement("a", { href: `tel:${contact.phone.replace(/\s/g, "")}` }, contact.phone))),
      React.createElement("div", null, React.createElement("dt", null, "Service"), React.createElement("dd", null, "Online therapy only for adults across the UK"))
    )
  );
}

function CrisisDisclaimer() {
  return React.createElement(
    "aside",
    { className: "crisis-disclaimer" },
    React.createElement("strong", null, "Crisis support"),
    React.createElement("p", null, "This service is not an emergency or crisis service. If you feel at immediate risk, call 999 or go to A&E. You can also contact Samaritans on 116 123 or NHS 111 for urgent advice.")
  );
}

function CTA({ title, text, href = "/contact", label = "Get in touch", theme = "farrer" }) {
  return React.createElement(
    "section",
    { className: `cta theme-${theme}` },
    React.createElement("div", { className: "container" },
      React.createElement("h2", null, title),
      text ? React.createElement("p", null, text) : null,
      React.createElement("a", { className: "button primary", href }, label)
    )
  );
}

module.exports = {
  tokens,
  SiteShell,
  Hero,
  PageHeader,
  Section,
  CardGrid,
  FeatureBand,
  ProcessSteps,
  StatementPanel,
  TextBlock,
  ContactPanel,
  CrisisDisclaimer,
  CTA
};
