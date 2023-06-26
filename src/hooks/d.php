
<?php

function update($request) {
    $data = $this->service->validate($request->validated()); // какая-нибудь кастомная валидация
    $this->repository->update($data); // просто добавляет в базу данных без каких либо проверок
}

function update($request) {
    $this->service->update($data); // метод update вызывает у Service метод для валидации данных и потом уже добавляет в базу данных
}
