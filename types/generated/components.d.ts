import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksContentSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_content_sections';
  info: {
    displayName: 'Content Section';
    icon: 'file-alt';
  };
  attributes: {
    body: Schema.Attribute.RichText & Schema.Attribute.Required;
    tagline: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksHero extends Struct.ComponentSchema {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'Hero';
    icon: 'landscape';
  };
  attributes: {
    announcementLinkLabel: Schema.Attribute.String;
    announcementLinkUrl: Schema.Attribute.String;
    announcementText: Schema.Attribute.String;
    primaryCtaLabel: Schema.Attribute.String;
    primaryCtaUrl: Schema.Attribute.String;
    secondaryCtaLabel: Schema.Attribute.String;
    secondaryCtaUrl: Schema.Attribute.String;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_blocks_testimonials';
  info: {
    displayName: 'Testimonial';
    icon: 'quote';
  };
  attributes: {
    authorName: Schema.Attribute.String & Schema.Attribute.Required;
    authorTitle: Schema.Attribute.String;
    quote: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface SharedFooter extends Struct.ComponentSchema {
  collectionName: 'components_shared_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    copyrightText: Schema.Attribute.String;
    linkGroups: Schema.Attribute.Component<'shared.footer-link-group', true>;
  };
}

export interface SharedFooterLinkGroup extends Struct.ComponentSchema {
  collectionName: 'components_shared_footer_link_groups';
  info: {
    displayName: 'Footer Link Group';
  };
  attributes: {
    links: Schema.Attribute.Component<'shared.nav-item', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedHeader extends Struct.ComponentSchema {
  collectionName: 'components_shared_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    navItems: Schema.Attribute.Component<'shared.nav-item', true>;
  };
}

export interface SharedNavItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_nav_items';
  info: {
    displayName: 'Nav Item';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'Seo';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
      }>;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'blocks.content-section': BlocksContentSection;
      'blocks.hero': BlocksHero;
      'blocks.testimonial': BlocksTestimonial;
      'shared.footer': SharedFooter;
      'shared.footer-link-group': SharedFooterLinkGroup;
      'shared.header': SharedHeader;
      'shared.nav-item': SharedNavItem;
      'shared.seo': SharedSeo;
    }
  }
}
