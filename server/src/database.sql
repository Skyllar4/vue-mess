create TABLE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255),
    updated_at timestamp,
    created_at timestamp
);

create TABLE tokenList(
    userId VARCHAR(255),
    refreshToken VARCHAR(255)
);

create TABLE chat_list(
    id SERIAL PRIMARY KEY,
    message VARCHAR(255),
    user_id INTEGER
);