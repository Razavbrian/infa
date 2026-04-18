import type { Schema, Struct } from '@strapi/strapi';

export interface ExamenExamen extends Struct.ComponentSchema {
  collectionName: 'components_examen_examen';
  info: {
    displayName: 'Examen';
  };
  attributes: {
    date_heure: Schema.Attribute.DateTime & Schema.Attribute.Required;
    duree_minutes: Schema.Attribute.BigInteger;
    enseignant: Schema.Attribute.String;
    matiere: Schema.Attribute.String & Schema.Attribute.Required;
    observations: Schema.Attribute.Text;
    salle: Schema.Attribute.String & Schema.Attribute.Required;
    type_epreuve: Schema.Attribute.Enumeration<
      ['ecrit', 'oral', 'pratique', 'projet']
    >;
  };
}

export interface ExamenExamens extends Struct.ComponentSchema {
  collectionName: 'components_examen_examens';
  info: {
    displayName: 'examens';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'examen.examen': ExamenExamen;
      'examen.examens': ExamenExamens;
    }
  }
}
