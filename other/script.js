import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 1000, // количество виртуальных пользователей
  duration: '120s', // длительность теста
};

export default function () {
  let res = http.get('http://127.0.0.1:42409/'); // поменять при перезапуске сервиса
  check(res, { 'status was 200': (r) => r.status === 200 });
  sleep(1);
}