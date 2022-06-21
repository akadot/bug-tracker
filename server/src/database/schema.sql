create table roles(
	title varchar not null unique,
	description varchar,
	primary key(title)
);

create table status(
	title varchar not null unique,
	description varchar,
	primary key(title)
);

create table categories(
	title varchar not null unique,
	description varchar,
	primary key(title)
);

create table users(
	id bigint generated always as identity,
	name varchar not null,
	email varchar not null unique,
	password varchar not null,
	role varchar default null,
	constraint FK_Roles_Users foreign key(role) references roles(title) on update cascade on delete set default,
	primary key(id)
);

create table projects(
	id bigint generated always as identity,
	name varchar not null,
	description varchar not null,
	primary key(id)
);


create table tickets(
	id bigint generated always as identity,
	title varchar not null,
	description varchar not null,
	category varchar default null,
	status varchar default null,
	created_by bigint not null,
	project_id bigint not null,
	created_at timestamp not null,
	edited_at timestamp not null,
	constraint FK_Users_Tickets foreign key(created_by) references users(id) on update cascade on delete no action,
	constraint FK_Projects_Tickets foreign key(project_id) references projects(id) on update cascade on delete no action,
	constraint FK_Status_Tickets foreign key(status) references status(title) on update cascade on delete set default,
	constraint FK_Categories_Tickets foreign key(category) references categories(title) on update cascade on delete set default,
	primary key(id)
);