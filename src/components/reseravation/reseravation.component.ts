import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reseravation',
  templateUrl: './reseravation.component.html',
  styleUrls: ['./reseravation.component.scss']
})
export class ReservationComponent implements OnInit {
  public reservationFields: any[] = [
    {
      type: 'text',
      name: 'name',
      label: 'Full Name',
      value: '',
      required: true,
    },
    {
      type: 'number',
      name: 'phoneNumber',
      label: 'Phone Number',
      value: '',
      required: true,
    },
    {
      type: 'text',
      name: 'email',
      label: 'Email',
      value: '',
      required: true,
    },

    // {
    //   type: 'file',
    //   name: 'picture',
    //   label: 'Picture',
    //   required: true,
    //   onUpload: this.onUpload.bind(this)
    // },
    // {
    //   type: 'dropdown',
    //   name: 'country',
    //   label: 'Country',
    //   value: 'in',
    //   required: true,
    //   options: [
    //     { key: 'in', label: 'India' },
    //     { key: 'us', label: 'USA' }
    //   ]
    // },
    // {
    //   type: 'radio',
    //   name: 'country',
    //   label: 'Country',
    //   value: 'in',
    //   required: true,
    //   options: [
    //     { key: 'm', label: 'Male' },
    //     { key: 'f', label: 'Female' }
    //   ]
    // },
    // {
    //   type: 'checkbox',
    //   name: 'hobby',
    //   label: 'Hobby',
    //   required: true,
    //   options: [
    //     { key: 'f', label: 'Fishing' },
    //     { key: 'c', label: 'Cooking' }
    //   ]
    // }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
