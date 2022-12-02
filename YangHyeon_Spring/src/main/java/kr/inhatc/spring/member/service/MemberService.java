package kr.inhatc.spring.member.service;

import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import kr.inhatc.spring.member.entity.Member;
import kr.inhatc.spring.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Service
@Transactional
@Log4j2
@RequiredArgsConstructor
public class MemberService implements UserDetailsService {

	private final MemberRepository memberRepository;

	public Member saveMember(Member member) {

		validateDuplicate(member);
		return memberRepository.save(member);

	}// end of saveMember

	private void validateDuplicate(Member member) {
		Member findMember = memberRepository.findById(member.getId());

		if (findMember != null) {
			throw new IllegalStateException("이미 등록된 사용자 입니다.\n학과 사무실에 문의해주세요 ");
		} // end of if

	}// end validateSuplicate

	@Override
	public UserDetails loadUserByUsername(String id) throws UsernameNotFoundException {

		Member member = memberRepository.findById(id);

		if (member == null) {
			throw new UsernameNotFoundException("해당 사용자가 없습니다. " + id);
		} // end of if

		log.info("========>loadUserByUserName : " + member);

		return User.builder().username(member.getId()).password(member.getPw()).roles(member.getRole().toString())
				.build();

	}// end of validateDuplicate

}// end of class
