import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { Settings } from '../../providers/settings';

@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  themeDark: boolean = false;
  tail_on: boolean = false;
  tail_text: string;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public settings: Settings, 
    public events: Events
  ) {
  }

  ionViewDidLoad() {
    this.settings.getValue('themeDark').then(themeDark=>this.themeDark = themeDark);
    this.settings.getValue('tail_on').then(tail_on=>this.tail_on = tail_on);
    this.settings.getValue('tail_text').then(tail_text=>this.tail_text = tail_text);
  }

  setting() {
    this.events.publish('themeDark')
    this.settings.setValue('tail_on',this.tail_on)
    this.settings.setValue('tail_text',this.tail_text)
  }

}
