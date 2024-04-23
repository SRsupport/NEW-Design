 $("#m-nt").click(function() {
          $(this).toggleClass("on");
          $("#tnl").slideToggle();
         });
         /*image*/
         const stepsTextWrapper = document.querySelectorAll('.step_itemWrp')
         const stepsIllustrations = document.querySelectorAll('.step_img')
         const removeActiveClass = () => {
         stepsTextWrapper.forEach(item => {
          item.classList.remove('active')
         })
         stepsIllustrations.forEach(item => {
          item.classList.remove('active')
          item.style.transform = 'translateY(-100px)'
         })
         }
         if (window.innerWidth > 767) {
         $('.step_itemWrp.step1').click(() => {
          removeActiveClass()
          $('.step1').addClass('active')
          $('.step_img.step1').css('transform', 'translateY(0px)')
         })
         $('.step_itemWrp.step2').click(() => {
          removeActiveClass()
          $('.step2').addClass('active')
          $('.step_img.step2').css('transform', 'translateY(0px)')
         })
         }