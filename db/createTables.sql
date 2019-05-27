create table posts (
    id serial primary key,
    title varchar,
    username varchar,
    img varchar,
    content varchar

)

create table sim_users (
    id serial primary key,
    login_id varchar,
    first_name varchar,
    last_name varchar,
    phone varchar,
    address varchar
)

create table sim_user_login (
    id serial primary key,
    username varchar,
    password text
) 