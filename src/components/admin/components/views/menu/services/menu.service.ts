import { CheckBoxField } from './../../../../../../shared/dynamic-forms-app/atoms/form-checkbox';
import { TextBoxField } from './../../../../../../shared/dynamic-forms-app/atoms/form-textbox';
import { FormBase } from 'src/shared/dynamic-forms-app/atoms/form-base';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  getMenuItems(): Observable<any> {
    // this.removeItem(1)
    return of([{
      "id": 1,
      "Name": "Scented Shootingstar",
      "Description": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
      "Price": 17.83,
      "Has_Options": false,
      "Image_URL": "http://dummyimage.com/165x100.png/dddddd/000000",
      "Unavaible": false,
      "Is_Special": true
    }, {
      "id": 2,
      "Name": "White Arctic Mountain Heather",
      "Description": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
      "Price": 28.81,
      "Has_Options": false,
      "Image_URL": "http://dummyimage.com/239x100.png/dddddd/000000",
      "Unavaible": true,
      "Is_Special": true
    }, {
      "id": 3,
      "Name": "One And A Half Flower Reedgrass",
      "Description": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
      "Price": 15.35,
      "Has_Options": false,
      "Image_URL": "http://dummyimage.com/132x100.png/dddddd/000000",
      "Unavaible": true,
      "Is_Special": false
    }, {
      "id": 4,
      "Name": "Nodding Pinweed",
      "Description": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
      "Price": 65.04,
      "Has_Options": true,
      "Image_URL": "http://dummyimage.com/237x100.png/ff4444/ffffff",
      "Unavaible": false,
      "Is_Special": true
    }, {
      "id": 5,
      "Name": "Bitter Dock",
      "Description": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
      "Price": 62.84,
      "Has_Options": false,
      "Image_URL": "http://dummyimage.com/131x100.png/dddddd/000000",
      "Unavaible": true,
      "Is_Special": false
    }, {
      "id": 6,
      "Name": "Meesia Moss",
      "Description": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
      "Price": 64.26,
      "Has_Options": true,
      "Image_URL": "http://dummyimage.com/197x100.png/5fa2dd/ffffff",
      "Unavaible": true,
      "Is_Special": false
    }, {
      "id": 7,
      "Name": "Ozark Hawthorn",
      "Description": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
      "Price": 32.13,
      "Has_Options": true,
      "Image_URL": "http://dummyimage.com/226x100.png/cc0000/ffffff",
      "Unavaible": true,
      "Is_Special": false
    }, {
      "id": 8,
      "Name": "Plumeless Thistle",
      "Description": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
      "Price": 60.62,
      "Has_Options": true,
      "Image_URL": "http://dummyimage.com/163x100.png/cc0000/ffffff",
      "Unavaible": false,
      "Is_Special": false
    }, {
      "id": 9,
      "Name": "Dendrobium",
      "Description": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
      "Price": 82.73,
      "Has_Options": false,
      "Image_URL": "http://dummyimage.com/129x100.png/dddddd/000000",
      "Unavaible": true,
      "Is_Special": false
    }, {
      "id": 10,
      "Name": "Shrubby Woodsorrel",
      "Description": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
      "Price": 5.9,
      "Has_Options": false,
      "Image_URL": "http://dummyimage.com/140x100.png/dddddd/000000",
      "Unavaible": false,
      "Is_Special": true
    }, {
      "id": 11,
      "Name": "Padre's Shootingstar",
      "Description": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      "Price": 36.3,
      "Has_Options": true,
      "Image_URL": "http://dummyimage.com/182x100.png/5fa2dd/ffffff",
      "Unavaible": true,
      "Is_Special": false
    }, {
      "id": 12,
      "Name": "Morocco Iris",
      "Description": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
      "Price": 18.27,
      "Has_Options": false,
      "Image_URL": "http://dummyimage.com/212x100.png/cc0000/ffffff",
      "Unavaible": false,
      "Is_Special": false
    }, {
      "id": 13,
      "Name": "Enterolobium",
      "Description": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
      "Price": 72.55,
      "Has_Options": false,
      "Image_URL": "http://dummyimage.com/162x100.png/dddddd/000000",
      "Unavaible": true,
      "Is_Special": true
    }, {
      "id": 14,
      "Name": "Distant Sedge",
      "Description": "Fusce consequat. Nulla nisl. Nunc nisl.",
      "Price": 4.62,
      "Has_Options": true,
      "Image_URL": "http://dummyimage.com/186x100.png/cc0000/ffffff",
      "Unavaible": false,
      "Is_Special": false
    }, {
      "id": 15,
      "Name": "Rocoto",
      "Description": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
      "Price": 57.67,
      "Has_Options": false,
      "Image_URL": "http://dummyimage.com/204x100.png/5fa2dd/ffffff",
      "Unavaible": true,
      "Is_Special": false
    }, {
      "id": 16,
      "Name": "Rockslope Cloak Fern",
      "Description": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
      "Price": 47.43,
      "Has_Options": false,
      "Image_URL": "http://dummyimage.com/229x100.png/ff4444/ffffff",
      "Unavaible": true,
      "Is_Special": true
    }, {
      "id": 17,
      "Name": "Little Cryptantha",
      "Description": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
      "Price": 42.15,
      "Has_Options": false,
      "Image_URL": "http://dummyimage.com/248x100.png/ff4444/ffffff",
      "Unavaible": true,
      "Is_Special": true
    }, {
      "id": 18,
      "Name": "Smooth Brome",
      "Description": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
      "Price": 40.04,
      "Has_Options": true,
      "Image_URL": "http://dummyimage.com/221x100.png/cc0000/ffffff",
      "Unavaible": false,
      "Is_Special": false
    }, {
      "id": 19,
      "Name": "Peganum",
      "Description": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
      "Price": 37.34,
      "Has_Options": true,
      "Image_URL": "http://dummyimage.com/205x100.png/dddddd/000000",
      "Unavaible": false,
      "Is_Special": true
    }, {
      "id": 20,
      "Name": "Wedge Sandmat",
      "Description": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
      "Price": 5.17,
      "Has_Options": false,
      "Image_URL": "http://dummyimage.com/162x100.png/5fa2dd/ffffff",
      "Unavaible": true,
      "Is_Special": true
    }])
  }
  removeItem(id: number) {
    this.getMenuItems().subscribe(items => {
      items.map((item: any, index: number) => {
        if (item.id == id)
          items.splice(index, 0)
      })
    })
  }
  getMenuItemForm(): Observable<any> {
    const questions: FormBase<string>[] = [
      new TextBoxField({
        key: 'Name',
        label: 'Item name',
        value: '',
        type: 'text',
        required: true,
        errorMessage: 'Name is required'
      }),
      new TextBoxField({
        key: 'Description',
        label: 'Item description',
        value: '',
        type: 'text',
        required: true,
        errorMessage: 'Description is required'
      }),
      new TextBoxField(
        {
          key: 'Price',
          label: 'Price',
          type: 'number',
          required: true,
          value: 1,
          errorMessage: 'Price is required',
        }),
      new CheckBoxField({
        label: 'Options',
        required: false,
        key: 'Has_Options',
        type: 'number',
        value: false
      }),
      new TextBoxField({
        key: 'Image_URL',
        label: 'Image',
        value: '',
        type: 'text',
        required: true,
        errorMessage: 'Image is required'
      }),
      new CheckBoxField({
        key: 'Is_Temporarily_Unavailable',
        label: 'Temporary Item?',
        value: false,
        type: 'checkbox',
        required: true,
        errorMessage: 'This field is required',
      }),
      new CheckBoxField({
        key: 'Is_Special',
        label: 'Special?',
        value: false,
        type: 'checkbox',
        required: true,
        errorMessage: 'This field is required',
      }),
    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }
}
