import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  whyElectronicNoteBookText: string = `Настав той час коли навіть школяр хоче бути в “тренді”, тож ми створили місце де навіть пенсіонер зможе розібратись. Це стильний та легкий в використанні сайт де можна відстежувати свою успішність з різних предметів у школі та університеті, також цей електронний щоденник можна використати як звичайний планер для розпланування твого дня, тижня, місяця.`
  yourElectronicNoteBookAlwaysWithYouText = `Твій щоденник завджи з тобою, у твоїй кишені, у твоєму компютері та планшеті. Ти можеш легко перевірити своє домашнє завдання та перевірити бали за твоє вже виконане домашнє завдання.`;
  navigation: any[] = [
    {
      name: "Додаток",
      type: "rout",
      href: "/"
    },
    {
      name: "Про нас",
      type: "rout",
      href: "/"
    },
    {
      name: "Компанія",
      type: "rout",
      href: "/"
    },
    {
      name: "logo",
      type: "logo",
      src: "../../assets/images/logo.svg",
      href: "/"},
    {
      name: "Допомога",
      type: "rout",
      href: "/"
    },
    {
      name: "Блог",
      type: "rout",
      href: "/"
    },
    {
      name: "Ресурси",
      type: "rout",
      href: "/"
    }
  ]
}
