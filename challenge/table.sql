CREATE TABLE country (
	id uuid NOT NULL DEFAULT uuid_generate_v4(),
  name varchar(50) NOT NULL,
  url_img text NOT NULL,
  PRIMARY KEY(id)
);


CREATE TABLE place (
  id uuid NOT NULL DEFAULT uuid_generate_v4(), 
  place varchar(50) NOT NULL,
  mark varchar(50) NOT NULL,
  created_at timestamp NOT NULL default now(),
  updated_at timestamp,
  country_id uuid NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY(country_id) REFERENCES country (id)
);
