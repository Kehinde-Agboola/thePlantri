import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
// import { Reviews } from '../../../../shared/reviews';
import { RatingModule } from 'primeng/rating';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [RatingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss',
})
export class ReviewsComponent implements OnInit {
  // reviews: Reviews[] = [
  //   {
  //     name: ' Pamela S.',
  //     description:
  //       'Lorem ipsum dolor sit amet consectetur. Adipiscing volutpat sed platea libero rhoncus magnis. At habitasse aliquet posuere sit viverra vehicula ultricies sit senectus. Arcu sit ipsum tempor nisl diam. Amet viverra lacus tempus ut velit leo nunc mi lacus. At velit dignissim suspendisse id sed risus massa enim pulvinar. Sit laoreet faucibus praesent ornare mattis. Blandit integer consectetur tellus ultricies. Diam ',
  //     rating: 4.5,
  //     city: 'Lake Forest, CA',
  //   },
  //   {
  //     name: ' Pamela S.',
  //     description:
  //       'Lorem ipsum dolor sit amet consectetur. Adipiscing volutpat sed platea libero rhoncus magnis. At habitasse aliquet posuere sit viverra vehicula ultricies sit senectus. Arcu sit ipsum tempor nisl diam. Amet viverra lacus tempus ut velit leo nunc mi lacus. At velit dignissim suspendisse id sed risus massa enim pulvinar. Sit laoreet faucibus praesent ornare mattis. Blandit integer consectetur tellus ultricies. Diam ',
  //     rating: 4.5,
  //     city: 'Lake Forest, CA',
  //   },
  //   {
  //     name: ' Pamela S.',
  //     description:
  //       'Lorem ipsum dolor sit amet consectetur. Adipiscing volutpat sed platea libero rhoncus magnis. At habitasse aliquet posuere sit viverra vehicula ultricies sit senectus. Arcu sit ipsum tempor nisl diam. Amet viverra lacus tempus ut velit leo nunc mi lacus. At velit dignissim suspendisse id sed risus massa enim pulvinar. Sit laoreet faucibus praesent ornare mattis. Blandit integer consectetur tellus ultricies. Diam ',
  //     rating: 4.5,
  //     city: 'Lake Forest, CA',
  //   },
  // ];
  // ratingValue: any;
  // value: any;

  constructor() {}

  ngOnInit(): void {}
}
